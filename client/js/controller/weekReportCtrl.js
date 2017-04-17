app.controller('WeekReportCtrl', [
	'$scope'
, function(
	$scope
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
		console.log($scope.formData);
	};




}]);