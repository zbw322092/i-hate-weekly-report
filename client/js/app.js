var app = angular.module('weekReport', ['ui.router']);
app.config([
	'$stateProvider',
	'$locationProvider',
	function(
		$stateProvider,
		$locationProvider
	) {

	$locationProvider.hashPrefix('');

	var helloState = {
		name: 'index',
		url: '',
		templateUrl: '/client/views/report_content_form.html',
		controller: 'WeekReportCtrl'
	};

	$stateProvider.state(helloState);
}]);

