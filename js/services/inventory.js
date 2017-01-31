module.exports = {
	name: 'LemonadeWarehouse',
	task() {
		const inventory = [
			{ name: 'lemons', amount: 5, price: 2 },
			{ name: 'sugar', amount: 5, price: 1.25 },
			{ name: 'ice', amount: 5, price: 0.5 },
			{ name: 'cups', amount: 5, price: 0.1 },
		];
		
		return {
			getInventory() {
				return inventory;
			},
			buyItems(item, numPurchased) {
				console.log('buying items');
				// Update item amount and then return cost of purchase
				if (item.amount >= numPurchased) {
					item.amount -= numPurchased;
					return item.price * numPurchased;
				} else {
					alert('not enough items');
				}
			},
		};
	},
};