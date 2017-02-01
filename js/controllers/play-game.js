module.exports = {
	name: 'PlayGame',
	task($scope, $state, CreateStand, Supplies) {
		
		// Get stand id and set it for all relevent services
		let stand_id = CreateStand.getId();
		if (stand_id === null) {
			$state.go('home');
		}
		Supplies.setId(stand_id);
		
		// Get current ingredients
		Supplies.getIngredients();
		//let $scope.ingredients = Supplies.getIngredients();
	},
};