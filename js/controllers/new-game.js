module.exports = {
	name: 'NewGame',
	task($scope, CreateStand) {
		$scope.id = null;
		
		$scope.start = function(name) {
			// Send business name to server to start a new game
			CreateStand.startGame(name, setId);
			
			// After new game starts, get stand id
			$scope.id = CreateStand.getId();
			console.log($scope.id);
		};
		
		
	},
};