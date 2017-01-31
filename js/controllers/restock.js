module.exports = {
	name: 'RestockInventory',
	task($scope, Piggybank, Supplies) {
		$scope.inventory = Supplies.getInventory();
		
		$scope.buy = function(item, amtPurchased) {
			if (Piggybank.getFunds() >= item.price * amtPurchased) {
				// buyItems() updates item amount and returns cost of purchase
				let cost = Supplies.buyItems(item, amtPurchased);
				Piggybank.payExpenses(cost);
			} else {
				alert(`You don't have enough money for this purchase.`);
			}
		};
	},
};