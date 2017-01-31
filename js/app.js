const app = angular.module('LemonadeApp', []);

const controllers = [
	require ('./controllers/display-stats'),
	require ('./controllers/restock'),
];

for(let i=0; i<controllers.length; i++) {
	app.controller(controllers[i].name, controllers[i].task);
}

const services = [
	require ('./services/inventory'),
	require ('./services/funds'),
];

for(let i=0; i<services.length; i++) {
	app.factory(services[i].name, services[i].task);
}

/*app.component('snackButton', {
	templateUrl: 'templates/snack-button.html',
	bindings: {
		xyz: '<', // <= the type of binding
		tappedOn: '@',
	},
	//controller: 'SnackButtonController',
});*/