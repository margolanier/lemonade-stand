module.exports = {
	name: 'DisplayStats',
	task($scope, Piggybank, LemonadeWarehouse) {
		$scope.funds = Piggybank.getFunds();
		
		setInterval(function() {
			$scope.funds = Piggybank.getFunds();
		}, 500);
		
	},
};