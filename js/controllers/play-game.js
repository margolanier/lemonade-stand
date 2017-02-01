module.exports = {
	name: 'PlayGame',
	task($scope, CreateStand) {
		console.log('playing game now');
		$scope.stand_id = CreateStand.getId();
		console.log($scope.stand_id);
		
	},
};