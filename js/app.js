const app = angular.module('LemonadeApp', ['ui.router', 'ngMaterial']).run(function ($rootScope, $state, $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
});


// Routes
app.config(function($stateProvider) {
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
});


// Controllers
const controllers = [
	require ('./controllers/new-game'),
	require ('./controllers/play-game'),
	require ('./controllers/high-scores'),
	
//	require ('./controllers/display-stats'),
//	require ('./controllers/restock'),
];

for(let i=0; i<controllers.length; i++) {
	app.controller(controllers[i].name, controllers[i].task);
}


// Components
app.component('newGame', {
	//controller: 'NewGame',
	templateUrl: 'templates/new-game.html',
});

app.component('playGame', {
	//controller: 'PlayGame',
	templateUrl: 'templates/play-game.html',
});

app.component('highScores', {
	//controller: 'HighScores',
	templateUrl: 'templates/high-scores.html',
});


// Services
const services = [
	//require ('./services/service'),
	require ('./services/create-stand'),
	require ('./services/supplies'),
	require ('./services/business'),
];

for(let i=0; i<services.length; i++) {
	app.factory(services[i].name, services[i].task);
}
