module.exports = {
	name: 'Business',
	
	task($http) {
		let stand_id = null;
		
		let myBiz = {
			day: 0,
			inBiz: true,
			daysInBiz: 0,
			balance: 0,
			cupPrice: 0,
			prevDayCustomers: 0,
			prevDayVisitors: 0,
			totalCustomers: 0,
			totalVisitors: 0,
		};
		
		return {
			setId(id) {
				stand_id = id;
			},
			
			getStats() {
				return $http.get(`https://blooming-hamlet-70507.herokuapp.com/stand/${stand_id}`).then(function(response) {
					let stats = response.data;
					
					// Update business stats
					myBiz.day = stats.day;
					myBiz.inBiz = stats.in_business;
					myBiz.daysInBiz = stats.day - stats.started_on;
					myBiz.balance = stats.business.balance;
					myBiz.cupPrice = stats.business.price;
					myBiz.prevDayCustomers = stats.business.yesterday_cups_sold;
					myBiz.prevDayVisitors = stats.business.yesterday_visitors;
					myBiz.totalCustomers = stats.business.total_cups_sold;
					myBiz.totalVisitors = stats.business.total_visitors;
					
					return myBiz;
				});
			},
			
			setCupPrice(price) {
				return $http.post(`https://blooming-hamlet-70507.herokuapp.com/stand/update?id=${stand_id}`, {
					property: `business.price`,
					set: price,
				});
			},
		};
	},
	
};