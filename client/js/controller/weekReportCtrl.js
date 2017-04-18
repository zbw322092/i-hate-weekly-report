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
			url: '/example',
			headers: {
			  'Content-Type': undefined
			},
			data: { test: 'test' }
		};

		$http(config)
			.then(function() {
				console.log('ok');
			})
			.catch(function() {
				console.log('failed');
			});
	};




}]);