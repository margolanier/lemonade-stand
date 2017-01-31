module.exports = {
	name: 'Piggybank',
	task() {
		let piggybank = 20;
		
		return {
			enoughMoney(costPerItem, numItems) {
				return piggybank > (costPerItem * numItems);
			},
			decreaseFunds(cost) {
				piggybank -= cost;
			},
			getFunds() {
				return piggybank;
			}
		};
	},
};