'use strict';

/**
 * @ngdoc overview
 * @name userAppApp
 * @description
 * # userAppApp
 *
 * Main module of the application.
 */
angular
  .module('userAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/add_user', {
        templateUrl: 'views/add_user.html',
        controller: 'AddUserCtrl',
        controllerAs: 'addUser'
      })
      .when('/addBrand', {
        templateUrl: 'views/addbrand.html',
        controller: 'AddbrandCtrl',
        controllerAs: 'addBrand'
      })
      .when('/addMeasurement', {
        templateUrl: 'views/addmeasurement.html',
        controller: 'AddmeasurementCtrl',
        controllerAs: 'addMeasurement'
      })
      .when('/addBatch', {
        templateUrl: 'views/addbatch.html',
        controller: 'AddbatchCtrl',
        controllerAs: 'addBatch'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
