module.exports = {
	name: 'DisplayStats',
	task($scope, Piggybank, Supplies) {
		$scope.funds = Piggybank.getFunds();
		
		setInterval(function() {
			$scope.funds = Piggybank.getFunds();
		}, 500);
		
	},
};