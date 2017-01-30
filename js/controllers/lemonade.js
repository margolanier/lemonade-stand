module.exports = {
	name: 'RestockController',
	task: function($scope) {
		$scope.inventory = [
			{ name: 'lemons', amount: 5, price: 2 },
			{ name: 'sugar', amount: 5, price: 1.25 },
			{ name: 'ice', amount: 5, price: 0.5 },
			{ name: 'cups', amount: 5, price: 0.1 },
		];
		
		$scope.buy = function(item, buyAmt) {
			if (item.amount >= buyAmt) {
				item.amount -= buyAmt;
			}
		};
	},
};