module.exports = [
	{
		name: 'asMoney',
		task() {
			return function(x) {
				x = parseInt(x);
				let num = Math.round(x * 100)/100
				return '$' + num;
			};
		},
	},
	{
		name: 'asTemp',
		task() {
			return function(x) {
				x = parseInt(x);
				let num = Math.round(x);
				return x + '\xB0 F';
			};
		},
	},
	
];

