module.exports = {
	name: 'RestockInventory',
	task($scope, Piggybank, LemonadeWarehouse) {
		$scope.inventory = LemonadeWarehouse.getInventory();
		
		$scope.buy = function(item, numPurchased) {
			if (Piggybank.enoughMoney(item.price, numPurchased)) {
				// buyItems() updates item amount and returns cost of purchase
				let cost = LemonadeWarehouse.buyItems(item, numPurchased);
				console.log(cost);
				Piggybank.decreaseFunds(cost);
				let current = Piggybank.getFunds();
				console.log('updated funds: ' + current);
			} else {
				alert('not enough money');
			}
		};
	},
};