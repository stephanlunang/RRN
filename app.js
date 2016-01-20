if (Meteor.isClient) { 
	angular.module('RRN', [
		'angular-meteor',
		'ui.router'
		]);

  angular.module('RRN').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('landing', {
        url: '/landing',
        templateUrl: 'landing.html'
      })
      .state('robert', {
        url: '/robert',
        templateUrl: 'robert.html'
      });

    $urlRouterProvider.otherwise("/landing");
  });
}