module.exports = {
	name: 'Supplies',
	
	task($http) {
		let stand_id = null;
		let ingredients = [];
		
		const Ingredient = function(name, amount, price, singular) {
			this.name = name;
			this.amount = amount;
			this.price = price;
			this.singular = singular;
			
			return this;
		};
		
		ingredients.push(new Ingredient('ice', 0, 0.5, 'chunk'));
		ingredients.push(new Ingredient('lemons', 0, 2, 'lemon'));
		ingredients.push(new Ingredient('sugar', 0, 1.25, 'bag'));
		ingredients.push(new Ingredient('cups', 0, 0.1, 'cup'));
		
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
			
			buyItem(item, num) {
				console.log(`buying ${num} ${item}`);
				return $http.post(`https://blooming-hamlet-70507.herokuapp.com/stand/update?id=${stand_id}`, {
					property: `ingredients.${item}`,
					add: num,
				});
			},
		};
	},
	
};