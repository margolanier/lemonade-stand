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
		
		
		// Define tasks for every time the game info is updated
		// Watch for changes in balance, day, and 'in business' status
		function updateGame() {
			
			// Get current ingredients
			Supplies.getIngredients().then(function(updatedItems) {
				$scope.ingredients = updatedItems;
			});
			
			// Get business stats
			Business.getStats().then(function(updatedStats) {
				$scope.stats = updatedStats;
				
				// Watch for 'out of business' status => game over
				if($scope.stats.inBiz === false) {
					//gameOver();
					$state.go('new-game');
				}
			});
			
			// Get weather forecast
			Weather.getForecast().then(function(tomorrow) {
				$scope.forecast = tomorrow;
			});
		}
		
		// Set interval to update stats
		let updatePromise;
		function startUpdating() {
			updatePromise = $interval(updateGame, 1000);
		};
		
		function stopUpdating() {
			$interval.cancel(updatePromise);
		};
		
		function gameOver() {
			console.log('game over');
			$interval.cancel(stopUpdating);
			$state.go('high-scores');
		}
		
		startUpdating();
		
		
		// Buy more supplies
		$scope.buy = function(item, num) {
			Supplies.buyItem(item.name, num).then(function() {
				updateGame();
			});
		};
		
		// Set price of one cup
		$scope.setPrice = function(amount) {
			Business.setCupPrice(amount);
		};
		
		
		// Set up timer to display to user
		// Interval that counts down the time left in current day
		let timerPromise;
		$scope.time = 120;
		
		function startTimer() {
			timerPromise = $interval(countDown, 1000);
		};
		
		function stopTimer() {
			$interval.cancel(timerPromise);
		};
		
		startTimer();
		
		function countDown() {
			if ($scope.time > 0) {
				$scope.time--;
			} else {
				stopTimer();
			}
		}
		
	},
};