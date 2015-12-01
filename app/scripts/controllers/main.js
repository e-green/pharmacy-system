'use strict';

/**
 * @ngdoc function
 * @name userAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the userAppApp
 */
angular.module('userAppApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.indexBrand = function () {
      $("#brand").show();
      $("#measurement").hide();
      $("#item").hide();
      $("#batch").hide();
      $("#user").hide();
    };

    $scope.indexMeasurement = function () {
      $("#brand").hide();
      $("#measurement").show();
      $("#item").hide();
      $("#batch").hide();
      $("#user").hide();
    };
    $scope.indexItems = function () {
      $("#brand").hide();
      $("#measurement").hide();
      $("#item").show();
      $("#batch").hide();
      $("#user").hide();
    };
    $scope.indexBatch = function () {
      $("#brand").hide();
      $("#measurement").hide();
      $("#item").hide();
      $("#batch").show();
      $("#user").hide();
    };
    $scope.indexUser = function () {
      $("#brand").hide();
      $("#measurement").hide();
      $("#item").hide();
      $("#batch").hide();
      $("#user").show();
    };
    $scope.indexReload=function(){
      $("#brand").show();
      $("#measurement").show();
      $("#item").show();
      $("#batch").show();
      $("#user").show();
    };

  });
