var app = angular.module('weekReport', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		var routeConfig = {
			controller: 'WeekReportCtrl',
			templateUrl: 'weekReport-index.html'
		};

		$routeProvider
			.when('/week_report', routeConfig)
			.otherwise({
				redirectTo: '/week_report'
			});

	}]);