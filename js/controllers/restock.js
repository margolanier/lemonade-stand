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

/*<section ng-controller="RestockInventory">
	<ul>
		<li ng-repeat="item in inventory">
			<p class="item-name">{{item.name}}</p>
			<p>Available: {{item.amount}}</p>
			<p>Price per unit: ${{item.price.toFixed(2)}}</p>
			<input ng-model="amtToBuy" type="number" placeholder="amount" min="0">
			<buy-items-button target="item" on-click="buy(item, amtToBuy)"></buy-items-button>
		</li>
	</ul>
</section>*/