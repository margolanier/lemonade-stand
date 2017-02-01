module.exports = {
	name: 'CreateStand',
	
	task($http) {
		let stand_id = null;
		
		return {
			startGame(bizName) {
				$http({
					method: 'POST',
					url: 'https://blooming-hamlet-70507.herokuapp.com/stand',
					headers: {
						'Content-Type': 'application/json'
					},
					data: {
						stand_name: bizName,
					},
				}).then(function(response) {
					//angular.copy(response.data.stand_id, stand_id);
					console.log(response.data.stand_id);
					stand_id = response.data.stand_id;
					
				});
			},
			
			getId() {
				console.log('the stand id is ' + stand_id);
				return stand_id;
			},
		};
	},
	
};