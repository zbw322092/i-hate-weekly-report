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

	$scope.showProcessing = false;

	$scope.addNewLine = function() {
		if($scope.formData.length == 1) {
			sessionStorage.setItem('authorName', $scope.formData[0].author);
		}
		var initRowData = {
			affairs: null,
			time: null,
			author: sessionStorage.getItem('authorName'),
			completion: null
		};
		$scope.formData.push(initRowData);
		$timeout(function() {
			var forms = document.getElementsByClassName('first-input');
			var lastForm = forms[$scope.formData.length-1];
			lastForm.focus();
		});
	};

	$scope.submitForm = function() {
		$scope.showProcessing = true;
		$scope.processText = "Processing...";
		var copiedFormData = JSON.parse(JSON.stringify($scope.formData));
		
		copiedFormData.forEach(function(value) {
			value['time'] = value['time'] + ' hours';
			value['completion'] = value['completion'] + '%';
		});

		var config = {
			method: 'POST',
			url: '/submit/formdata',
			headers: {
			  'Content-Type': 'application/json'
			},
			data: JSON.stringify(copiedFormData)
		};

		$http(config)
			.then(
				function(data) {
					console.log(data);
					console.log('ok');
					
					$scope.processText = "Done!";
					$timeout(function() {
						$scope.showProcessing = false;
					}, 1000);
				}, function() {
					console.log('failed');
					$scope.processText = "Failed. Try Again!";
					$timeout(function() {
						$scope.showProcessing = false;
					}, 1000);
				}
			);
	};

	$scope.showDeleteMark = function(index) {
		$scope['deleteMark' + index] = true;
	};

	$scope.hideDeleteMark = function(index) {
		$scope['deleteMark' + index] = false;
	};

	$scope.deleteRow = function(index) {
		if ($scope.formData.length > 1) {
			$scope.formData.splice(index,1);
		}
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















