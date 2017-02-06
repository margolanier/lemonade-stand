module.exports = {
	name: 'NewGame',
	task($scope, $state, CreateStand) {
		// Send business name to server to start a new game
		// After this function runs, view changes to PlayGame
		$scope.start = function(name) {
			if (name === undefined) {
				alert('Please enter a name for your lemonade stand.');
			} else {
				CreateStand.startGame(name).then(function () {
					$state.go('play-game');
				});
			}
		};
	},
};