module.exports = {
	name: 'PlayGame',
	task($scope, $state, $interval, CreateStand, Supplies, Business, Weather) {
		
		// Get stand id and set it for all relevent services
		let stand_id = CreateStand.getId();
		if (stand_id === null) {
			$state.go('home');
		}
		Supplies.setId(stand_id);
		Business.setId(stand_id);
		
		let updateGame = function() {
			// Get current ingredients
			Supplies.getIngredients().then(function(updatedItems) {
				$scope.ingredients = updatedItems;
			});
			
			// Get business stats
			Business.getStats().then(function(updatedStats) {
				$scope.stats = updatedStats;
				
				if($scope.stats.inBiz === false) {
					gameOver();
				}
			});
			
			Weather.getForecast().then(function(tomorrow) {
				$scope.forecast = tomorrow;
			});
		}
		updateGame();
		
		// Set interval to update stats every 10 sec
		$interval(updateGame, 10000);
		
		// Watch for end of day
		/*if (the day changes) {
			
		}*/
		// stuff here to show pop-up form
		
		$scope.buy = function(item, num) {
			Supplies.buyItem(item.name, num).then(function() {
				updateGame();
			});
		};
		
		let gameOver = function() {
			$state.go('high-scores');
		};
	},
};