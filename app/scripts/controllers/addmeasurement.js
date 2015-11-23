'use strict';

/**
 * @ngdoc function
 * @name userAppApp.controller:AddmeasurementCtrl
 * @description
 * # AddmeasurementCtrl
 * Controller of the userAppApp
 */
angular.module('userAppApp')
  .controller('AddmeasurementCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.form = {
      errors: []
    };
    $(document).ready(function () {
      $('[data-toggle="popover"]').popover();
    });

    function isInt(value) {
      return !isNaN(value) && (function (x) {
          return (x | 0) === x;
        })(parseFloat(value))
    }

    /**
     * To the next field and focus it.
     * Used ng-blur method.
     */
    $scope.activeInitializeOnMeasure = function (event) {

      console.log(event);
      if (IsNumeric(event.which)) {
        document.getElementById("measure").focus();
      }else{

      }
      ;
      if (event.which === 13) {
        console.log("TAB activated");
        console.log(event);
        document.getElementById("measure").focus();
      }
    };
    //$scope.activeTitleSelect = function (event) {
    //  if (event.which === 13) {
    //    document.getElementById("title").focus();
    //  }
    //};
    //$scope.activeNic = function (event) {
    //  if (event.which === 13) {
    //    document.getElementById("nic").focus();
    //  }
    //};
    $scope.activeReviewButtonOnMeasure = function (event) {
      if (event.which == 13) {
        document.getElementById("reviewBtn").focus();
      }
    };

    $scope.openReviewModal = function () {
      $('#reviewModal').modal('show');
    }
  });
