module.exports = {
	name: 'LemonadeAPI',
	task($http) {
		
		// all lemonade stats will go here
		const beyhive = {};
		
		let stand_id = null;
		const forecast = {};
		
		function ingredients(name, amount, price) {
			this.name = name;
			this.amount = amount;
			this.price = price;
			
			return this;
		}
		
		return {
			startGame() {
				$http({
					method: 'POST',
					url: '/luke.com/stand',
					headers: {
						'Content-Type': 'application/json'
					},
					data: {
						stand_name: 'margos stand', //input name will go here
					},
				}).then(function(response) {
					console.log(response.data);
					angular.copy(response.data.stand_id, stand_id);
				});
			},
			
			getStatus() {
				$http.get('luke.com/stand/{stand_id}').then(function(response) {
					angular.copy(response.data, beyhive);
				};
			},
			
			getForecast() {
				$http.get('luke.com/weather/forecast').then(function(response) {
					angular.copy(response.data, forecast);
				};
			},
			
			getInventory() {
				return beyhive.ingredients;
			},
			
			buyIngredient(item, amount) {
				$http({
					method: 'POST',
					url: '/luke.com/stand',
					headers: {
						'Content-Type': 'application/json'
					},
					data: {
						property: ingredients[item],
						add: amount,
					},
				}).then(function(response) {
					console.log(response.data);
					angular.copy(response.data.ingredients, stand_id);
				});
			},
		};
	},
};