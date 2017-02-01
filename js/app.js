const app = angular.module('LemonadeApp', []);

const controllers = [
	require ('./controllers/display-stats'),
	require ('./controllers/restock'),
];

for(let i=0; i<controllers.length; i++) {
	app.controller(controllers[i].name, controllers[i].task);
}

const services = [
	require ('./service'),
];

for(let i=0; i<services.length; i++) {
	app.factory(services[i].name, services[i].task);
}

/*app.component('buyItemsButton', {
	templateUrl: 'templates/btn-buy-item.html',
	bindings: {
		target: '<',
		onClick: '&',
	},
	//controller: 'RestockInventory',
});*/