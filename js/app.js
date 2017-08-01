var wineApp = angular.module('wineApp', ['ngRoute']);

wineApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'template/home.html',
		})
		.when('/red', {
			templateUrl: 'template/red.html',
			
		})
		.when('/white', {
			templateUrl: 'template/white.html',
			
		})
		.otherwise({
			redirectTo: '/'
		});
}]);