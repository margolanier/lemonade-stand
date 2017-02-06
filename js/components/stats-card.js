module.exports = {
	name: 'statsCard',
	details: {
		templateUrl: 'templates/play-game.html',
		bindings: {
			person: '<', // read-only
			whenIClick: '&', // function
		},
	},
};