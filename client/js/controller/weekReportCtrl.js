app.controller('WeekReportCtrl', [
	'$scope',
	'$http',
	'hotkeys',
	function(
		$scope,
		$http,
		hotkeys
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

	hotkeys.bindTo($scope)
		.add({
			combo: 'alt+enter',
			description: 'add a new line',
			callback: function() {
				window.alert('Yes, a new line here');
			}
		});




}]);















