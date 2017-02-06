module.exports = {
	name: 'HighScores',
	tasktask($scope, $state, Scoreboard) {
		console.log('high scores controller');
		$scope.topStands = [];
		console.log($scope.topStands);
		
		Scoreboard.getHighScores().then(function(stands) {
			$scope.topStands = stands;
			console.log($scope.topStands);
		});
	},
};