const WatchlistGateway = require('./../../lib/gateway/WatchlistGateway'),
	JwtProvider = require('./../../lib/security/JwtProvider');

console.info(`Example: Node.js example script started.`);

let watchlistGateway = null;

process.on('SIGINT', () => {
	console.info('Example: Processing SIGINT');

	if (watchlistGateway !== null) {
		watchlistGateway.dispose();
	}

	process.exit();
});

process.on('unhandledRejection', (error) => {
	console.error('Unhandled Promise Rejection', error);
});

process.on('uncaughtException', (error) => {
	console.error('Unhandled Error', error);
});

const userId = process.argv[2];
const contextId = 'barchart';

if (typeof(userId) !== 'string' || userId.length === 0) {
	console.error('A user identifier must be specified. Usage example: "node example.js user-123"');
	process.exit();
}

console.info(`Example: Initializing WatchlistGateway, connecting to test environment as [ ${userId} ] [ ${contextId} ].`);

WatchlistGateway.forTest(JwtProvider.forTest(userId, contextId))
	.then((gateway) => {
		watchlistGateway = gateway;

		console.info(`Example: Retrieving watchlist(s) for [ ${userId} ] [ ${contextId} ].`);

		return watchlistGateway.readWatchlists()
			.then((watchlists) => {
				console.info(`Example: Retrieved [ ${watchlists.length} ] watchlist(s) for [ ${userId} ] [ ${contextId} ].`);

				console.debug(JSON.stringify(watchlists, null, 2));
			});
	}).then(() => {
		const watchlist = {
			name: 'Notable Tech Stocks',
			entries: [
				{ 'symbol': 'TSLA' },
				{ 'symbol': 'AAPL' }
			]
		};

		console.info(`Example: Creating new watchlist for [ ${userId} ] [ ${contextId} ].`);

		return watchlistGateway.createWatchlist(watchlist)
			.then((created) => {
				console.info(`Example: Created watchlist for [ ${userId} ] [ ${contextId} ] with identifier [ ${created.id} ].`);

				return created.id;
			});
	}).then((id) => {
		console.info(`Example: Reading single for [ ${userId} ] [ ${contextId} ] with identifier [ ${id} ].`);

		return watchlistGateway.readWatchlist(id)
			.then((watchlist) => {
				console.info(`Example: Read single watchlist for [ ${userId} ] [ ${contextId} ] with identifier [ ${id} ].`);

				console.debug(JSON.stringify(watchlist, null, 2));
			});
	}).then(() => {
		watchlistGateway.dispose();

		console.info(`Example: Node.js example script completed normally.`);
	});