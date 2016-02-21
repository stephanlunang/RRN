if (Meteor.isClient) { 
	angular.module('RRN', [
		'angular-meteor',
		'ui.router']);

  angular.module('RRN').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      .state('landing', {
        url: '/landing',
        templateUrl: 'landing.html'
      })
      .state('contactus', {
        url: '/contactus',
        templateUrl: 'contactus.html'
      })
      .state('clients', {
        url: '/clients',
        templateUrl: 'clients.html'
      })
      .state('aboutus', {
        url: '/aboutus',
        templateUrl: 'aboutus.html'
      })
      .state('lawyer', {
        url: '/lawyer',
        templateUrl: 'lawyer.html'
      });

    $urlRouterProvider.otherwise("/landing");
  });
}