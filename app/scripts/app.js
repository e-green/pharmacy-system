'use strict';

var mainHost = "http://173.192.63.94:8080/pharmacy/api/v1";
//var mainHost = "http://192.168.1.101:8080/web/gpstracker/v1";

var host = {
  brand: mainHost + '/brand'
};


var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

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
