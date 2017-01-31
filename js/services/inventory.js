module.exports = {
	name: 'Supplies',
	task() {
		const inventory = [
			{ name: 'lemons', amount: 0, price: 2 },
			{ name: 'sugar', amount: 0, price: 1.25 },
			{ name: 'ice', amount: 0, price: 0.5 },
			{ name: 'cups', amount: 0, price: 0.1 },
		];
		
		return {
			getInventory() {
				return inventory;
			},
			buyItems(item, amtPurchased) {
				// Update item amount and then return cost of purchase
				item.amount += amtPurchased;
				return item.price * amtPurchased;
			},
		};
	},
};