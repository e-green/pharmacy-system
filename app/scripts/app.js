'use strict';

var mainHost = "http://173.192.63.94:8080/pharmacy/api/v1";
//var mainHost = "http://192.168.1.101:8080/web/api/v1";

var host = {
  brand: mainHost + '/brand',
  measurement: mainHost + '/measurement',
  item: mainHost + '/item',
  batch: mainHost + '/batch',
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
      .when('/addItem', {
        templateUrl: 'views/additem.html',
        controller: 'AdditemCtrl',
        controllerAs: 'addItem'
      })
      .when('/userManagement', {
        templateUrl: 'views/usermanagement.html',
        controller: 'UsermanagementCtrl',
        controllerAs: 'userManagement'
      })
      .when('/viewAllBrand', {
        templateUrl: 'views/viewallbrand.html',
        controller: 'ViewallbrandCtrl',
        controllerAs: 'viewAllBrand'
      })
      .when('/viewAllMeasurement', {
        templateUrl: 'views/viewallmeasurement.html',
        controller: 'ViewallmeasurementCtrl',
        controllerAs: 'viewAllMeasurement'
      })
      .when('/viewAllBatch', {
        templateUrl: 'views/viewallbatch.html',
        controller: 'ViewallbatchCtrl',
        controllerAs: 'viewAllBatch'
      })
      .when('/viewAllItem', {
        templateUrl: 'views/viewallitem.html',
        controller: 'ViewallitemCtrl',
        controllerAs: 'viewAllItem'
      })
      .when('/addOrder', {
        templateUrl: 'views/addorder.html',
        controller: 'AddorderCtrl',
        controllerAs: 'addOrder'
      })
      .when('/addCustomer', {
        templateUrl: 'views/addcustomer.html',
        controller: 'AddcustomerCtrl',
        controllerAs: 'addCustomer'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
