module.exports = {
	name: 'Piggybank',
	task() {
		let piggybank = 20;
		
		return {
			payExpenses(cost) {
				piggybank -= cost;
			},
			getFunds() {
				return piggybank;
			}
		};
	},
};