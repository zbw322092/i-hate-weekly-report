app.controller('WeekReportCtrl', [
	'$scope',
	'$http',
	'$timeout',
	'hotkeys',
	function(
		$scope,
		$http,
		$timeout,
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
		$timeout(function() {
			var forms = document.getElementsByClassName('first-input');
			var lastForm = forms[$scope.formData.length-1];
			lastForm.foucs();
		},500);
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
			})
			.catch(function() {
				console.log('failed');
			});
	};

  $scope.keydownInLastInput = function(keyEvent) {
    console.log(keyEvent);
    if (keyEvent.key === 'Alt') {
    	keyEvent.srcElement.blur();
    	hotkeys
    		.add({
					combo: 'alt+enter',
					description: 'add a new line',
					callback: function(event) {
						$scope.addNewLine();
						hotkeys.del('alt+enter');
					}
    		});
    }
  };





}]);















