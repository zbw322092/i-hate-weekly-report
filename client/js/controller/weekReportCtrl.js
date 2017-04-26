app.controller('WeekReportCtrl', [
	'$scope',
	'$http',
	function(
		$scope,
		$http
) {
	$scope.canIBind = 'Yes, you can';
	$scope.formData = [{
		affairs: null,
		time: null,
		author: null,
		completion: null
	}];

	$scope.addNewLine = function() {
		var initRowData = {
			affairs: null,
			time: null,
			author: null,
			completion: null
		};
		$scope.formData.push(initRowData);
	};

	$scope.submitForm = function() {
		var config = {
			method: 'POST',
			url: '/submit/formdata',
			headers: {
			  'Content-Type': 'application/json'
			},
			data: JSON.stringify($scope.formData)
		};

		$http(config)
			.then(function() {
				console.log('ok');
			},function() {
				console.log('failed');
			});
			// .catch(function() {
			// 	console.log('failed');
			// });
	};




}]);















