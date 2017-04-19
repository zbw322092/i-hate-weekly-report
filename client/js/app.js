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


// var app = angular.module('weekReport', ['ngRoute'])
// 	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
// 		$locationProvider.hashPrefix('');

// 		$routeProvider
// 			.when('/', {
// 				controller: 'WeekReportCtrl',
// 				templateUrl: '/client/views/report_content_form.html'
// 			})
// 			.otherwise({
// 				redirectTo: '/'
// 			});

// 	}]);