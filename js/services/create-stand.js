module.exports = {
	name: 'CreateStand',
	
	task($http) {
		let stand_id = null;
		
		return {
			startGame(bizName) {
				return $http.post('https://blooming-hamlet-70507.herokuapp.com/stand', {
					stand_name: bizName,
				}).then(function(response) {
					stand_id = response.data.stand_id;
				});
			},
			
			getId() {
				return stand_id;
			},
		};
	},
	
};