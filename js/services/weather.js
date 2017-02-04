module.exports = {
	name: 'Weather',
	
	task($http) {
		let forecast = {
			// day
			// temp
			// condition
		};
		
		return {
			getForecast() {
				return $http.get('https://blooming-hamlet-70507.herokuapp.com/weather/forecast').then(function(response) {
					angular.copy(response.data, forecast);
					
					return forecast;
				});
			},
		};
	},
	
};