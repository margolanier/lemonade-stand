const app = angular.module('LemonadeApp', []);

const controllers = [
	require ('./controllers/lemonade'),
];

for(let i=0; i<controllers.length; i++) {
	app.controller(controllers[i].name, controllers[i].task);
}

