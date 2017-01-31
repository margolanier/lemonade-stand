module.exports = {
	name: 'DisplayStats',
	task($scope, Piggybank, Supplies) {
		$scope.funds = Piggybank.getFunds();
		$scope.inventory = Supplies.getInventory();
	},
};