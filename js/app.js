const app = angular.module('LemonadeApp', ['ui.router', 'ngMaterial']).run(function ($rootScope, $state, $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
});


// Routes
app.config(function($stateProvider, $mdThemingProvider) {
	$stateProvider.state({
		name: 'home',
		url: '',
		component: 'newGame',
	});
	
	$stateProvider.state({
		name: 'new-game',
		url: '/start',
		component: 'newGame',
	});
	
	$stateProvider.state({
		name: 'play-game',
		url: '/play',
		component: 'playGame',
	});
	
	$stateProvider.state({
		name: 'high-scores',
		url: '/scores',
		component: 'highScores',
	});
	
	
	// Material Design theme
	$mdThemingProvider.theme('default')
    .primaryPalette('purple')
    .accentPalette('purple');
});


// Controllers
const controllers = [
	require ('./controllers/new-game'),
	require ('./controllers/play-game'),
	require ('./controllers/high-scores'),
];

for(let i=0; i<controllers.length; i++) {
	app.controller(controllers[i].name, controllers[i].task);
}


// Components
const components = [
	require('./components/new-game'),
	require('./components/play-game'),
	require('./components/high-scores'),
	//require('./components/stats-card'),
];

for(let i=0; i<components.length; i++) {
	app.component(components[i].name, components[i].details);
}



// Filters
const filters = require ('./filters/filters');

for(let i=0; i<filters.length; i++) {
	app.filter(filters[i].name, filters[i].task);
}


// Services
const services = [
	require ('./services/create-stand'),
	require ('./services/supplies'),
	require ('./services/business'),
	require ('./services/weather'),
];

for(let i=0; i<services.length; i++) {
	app.factory(services[i].name, services[i].task);
}
