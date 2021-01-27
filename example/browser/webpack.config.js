'use strict';

const path = require('path');

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	mode: 'development',
	entry: [
		'./example/browser/src/main.js'
	],
	output: {
		path: path.resolve(__dirname),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname),
		open: true,
		watchOptions: {
			poll: true
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	]
};
