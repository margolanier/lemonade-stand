module.exports = {
	name: 'RestockController',
	task: function($scope) {
		$scope.inventory = [
			{ name: 'lemons', amount: 5, price: 2.00 },
			{ name: 'sugar', amount: 5, price: 1.25 },
			{ name: 'ice', amount: 5, price: 0.50 },
			{ name: 'cups', amount: 5, price: 0.10 },
		];
		
		$scope.buy = function(item) {
			if (item.amount > 0) {
				item.amount--;
			}
		};
	},
};