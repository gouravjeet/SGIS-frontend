'use strict';

/**
 * @ngdoc overview
 * @name socialjusticeApp
 * @description
 * # socialjusticeApp
 *
 * Main module of the application.
 */
angular
  .module('socialjusticeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'google-maps',
    'ngAutocomplete',
    'mgcrea.ngStrap',
    'angularCharts',
    'multi-select',
    'checklist-model',
    'djangoRESTResources',
    'ngTagsInput',
    'angucomplete'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });