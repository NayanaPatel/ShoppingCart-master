var MyApp = angular.module("myapp", ["ngRoute"]);

MyApp.config(function ($routeProvider, $locationProvider) {

	$locationProvider.hashPrefix('');

	$routeProvider.when('/home', {
		templateUrl: 'view/HomePage.html',
		controller: 'HomeCtrl',
		controllerAs: 'HomeModel'
	})
	.otherwise({
		redirectTo: '/home'
	});
});

MyApp.run(function () {});


