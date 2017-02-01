module.exports = {
	name: 'Supplies',
	
	task($http) {
		let stand_id = null;
		let ingredients = [];
		
		const Ingredient = function(name, amount, price) {
			this.name = name;
			this.amount = amount;
			this.price = price;
			
			return this;
		};
		
		ingredients.push(new Ingredient('ice', 0, 0.5));
		ingredients.push(new Ingredient('lemons', 0, 2));
		ingredients.push(new Ingredient('sugar', 0, 1.25));
		ingredients.push(new Ingredient('cups', 0, 0.1));
		
		return {
			setId(id) {
				stand_id = id;
			},
			
			getIngredients() {
				return $http.get(`https://blooming-hamlet-70507.herokuapp.com/stand/${stand_id}`).then(function(response) {
					let items = response.data.ingredients;
					
					// Update ingredient count with new amounts
					for(let i=0; i<items.length; i++) {
						ingredients[i].amount = items[i].value;
					}
					return ingredients;
				});
			},
			
			buyItem() {
				console.log('buying item');
			},
		};
	},
	
};