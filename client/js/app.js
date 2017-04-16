var app = angular.module('weekReport', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('');

		var routeConfig = {
			controller: 'WeekReportCtrl',
			templateUrl: 'weekReport-index.html'
		};

		$routeProvider
			.when('/week_report', routeConfig)
			.when('/can_I_bind', {
				controller: 'WeekReportCtrl',
				templateUrl: '/client/views/report_content_form.html'
			})
			.otherwise({
				redirectTo: '/week_report'
			});

	}]);