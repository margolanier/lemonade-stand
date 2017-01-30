const app = angular.module('LemonadeApp', []);

const controllers = [
	require ('./controllers/lemonade'),
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