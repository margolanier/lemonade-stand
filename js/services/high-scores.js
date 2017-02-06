module.exports = {
	name: 'Scoreboard',
	
	task($http) {
		let topStands = [];
		
		const Stand = function(name, inBiz, balance, cupsSold) {
			this.name = name;
			this.inBiz = inBiz;
			this.balance = balance;
			this.cupsSold = cupsSold;
		};
		
		return {
			getHighScores() {
				return $http.get('https://blooming-hamlet-70507.herokuapp.com/weather/stand/top').then(function(response) {
					// Clear old high scores
					topStands = [];
					
					// Return top 5 stands
					for (let i=0; i<5; i++) {
						let info = response.data;
						let stand = new Stand(
							info.name,
							info.in_business,
							info.business.balance,
							info.business.total_cups_sold
						);
						topStands.push(stand);
					}
					return topStands;
				});
			},
		};
	},
	
};