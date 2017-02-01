module.exports = {
	name: 'PlayGame',
	task($scope, $state, CreateStand, Supplies, Business) {
		
		// Get stand id and set it for all relevent services
		let stand_id = CreateStand.getId();
		if (stand_id === null) {
			$state.go('home');
		}
		Supplies.setId(stand_id);
		Business.setId(stand_id);
		
		// Get current ingredients
		Supplies.getIngredients().then(function(updatedItems) {
			$scope.ingredients = updatedItems;
		});
		
		// Get business stats
		Business.getStats().then(function(updatedStats) {
			$scope.stats = updatedStats;
		});
	},
};