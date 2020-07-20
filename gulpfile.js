const gulp = require('gulp');

const exec = require('child_process').exec,
	fs = require('fs');

const AWS = require('aws-sdk'),
	awspublish = require('gulp-awspublish'),
	browserify = require('browserify'),
	buffer = require('vinyl-buffer'),
	git = require('gulp-git'),
	gitStatus = require('git-get-status'),
	glob = require('glob'),
	jasmine = require('gulp-jasmine'),
	jshint = require('gulp-jshint'),
	prompt = require('gulp-prompt'),
	rename = require('gulp-rename'),
	replace = require('gulp-replace'),
	run = require('gulp-run-command').default,
	source = require('vinyl-source-stream');

function getVersionFromPackage() {
	return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
}

gulp.task('ensure-clean-working-directory', (cb) => {
	gitStatus((err, status) => {
		if (err, !status.clean) {
			throw new Error('Unable to proceed, your working directory is not clean.');
		}

		cb();
	});
});

gulp.task('bump-choice', (cb) => {
	const processor = prompt.prompt({
		type: 'list',
		name: 'bump',
		message: 'What type of bump would you like to do?',
		choices: ['patch', 'minor', 'major'],
	}, (res) => {
		global.bump = res.bump;

		return cb();
	});

	return gulp.src(['./package.json']).pipe(processor);
});

gulp.task('bump-version', (cb) => {
	exec(`npm version ${global.bump || 'patch'} --no-git-tag-version`, {
		cwd: './'
	}, (error) => {
		if (error) {
			cb(error);
		}

		cb();
	});
});

gulp.task('embed-version', () => {
	let version = getVersionFromPackage();

	return gulp.src(['./lib/index.js'])
		.pipe(replace(/(version:\s*')([0-9]+\.[0-9]+\.[0-9]+)(')/g, '$1' + version + '$3'))
		.pipe(gulp.dest('./lib/'));
});

gulp.task('build-example-bundle', run('npm run build'));

gulp.task('commit-changes', () => {
	return gulp.src([ './', './test/', './package.json', './lib/index.js', './test/SpecRunner.js' ])
		.pipe(git.add())
		.pipe(git.commit('Release. Bump version number'));
});

gulp.task('push-changes', (cb) => {
	git.push('origin', 'master', cb);
});

gulp.task('create-tag', (cb) => {
	const version = getVersionFromPackage();

	git.tag(version, 'Release ' + version, (error) => {
		if (error) {
			return cb(error);
		}

		git.push('origin', 'master', { args: '--tags' }, cb);
	});
});

gulp.task('build-test-bundle', () => {
	return browserify({ entries: glob.sync('test/specs/**/*.js') })
		.bundle()
		.pipe(source('SpecRunner.js'))
		.pipe(buffer())
		.pipe(gulp.dest('test'));
});

gulp.task('execute-browser-tests', () => {
	return gulp.src('test/SpecRunner.js')
		.pipe(jasmine());
});

gulp.task('execute-node-tests', () => {
	return gulp.src(['test/specs/**/*.js'])
		.pipe(jasmine());
});

gulp.task('execute-tests', gulp.series(
	'build-test-bundle',
	'execute-browser-tests',
	'execute-node-tests'
));

gulp.task('release', gulp.series(
	'ensure-clean-working-directory',
	'execute-tests',
	'bump-choice',
	'bump-version',
	'embed-version',
	'build-example-bundle',
	'commit-changes',
	'push-changes',
	'create-tag'
));

gulp.task('lint', () => {
	return gulp.src([ './**/*.js', './test/specs/**/*.js', '!./node_modules/**', '!./test/SpecRunner.js', '!./example/bundle.js', '!./docs/**', '!./webpack.config.js'])
		.pipe(jshint({ esversion: 9 }))
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'));
});


gulp.task('test', gulp.series('execute-tests'));

gulp.task('deploy-example', () => {
	const publisher = awspublish.create({
		region: 'us-east-1',
		params: {
			Bucket: 'barchart-examples'
		},
		credentials: new AWS.SharedIniFileCredentials({ profile: 'default' })
	});

	const headers = { 'Cache-Control': 'no-cache' };
	const options = { };

	return gulp.src(['./example/index.html', './example/bundle.js'])
		.pipe(rename((path) => {
			path.dirname = 'watchlist-client-js';
		}))
		.pipe(publisher.publish(headers, options))
		.pipe(publisher.cache())
		.pipe(awspublish.reporter());
});

gulp.task('default', gulp.series('lint'));
