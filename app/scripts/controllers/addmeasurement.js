'use strict';

/**
 * @ngdoc function
 * @name userAppApp.controller:AddmeasurementCtrl
 * @description
 * # AddmeasurementCtrl
 * Controller of the userAppApp
 */
angular.module('userAppApp')
  .controller('AddmeasurementCtrl', function ($scope, measurementService) {
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

    $scope.measurement = {
      "measurementId": "",
      "measurementName": "",
      "datetime": null
    }

    //function isInt(value) {
    //  return !isNaN(value) && (function (x) {
    //      return (x | 0) === x;
    //    })(parseFloat(value))
    //}

    /**
     * To the next field and focus it.
     * Used ng-blur method.
     */
    $scope.activeInitializeOnMeasure = function (event) {
      if (event.which === 13) {
        console.log("TAB activated");
        console.log(event);
        document.getElementById("measure").focus();
      }
    };
    $scope.saveMeasure = function () {
      $scope.form.errors = [];

      if ($scope.measurement.measurementName == '') {
        console.log("Error");
        $scope.form.errors.push("Error");
        $('#measurementName').popover();
        var popover = $('#measurementName').data('bs.popover');
        popover.options.content = 'Enter valid Measurement Name.';
        popover.options.placement = "right";
        $('#measurementName').popover('show');
        $('#measurementName').next('.popover');
      } else {
        $('#measurementName').popover('hide');
      }
      if ($scope.form.errors.length > 0) {
        return;
      }
      ;
      measurementService.addMeasurement($scope.measurement).then(function (data) {
        if (data != null) {
          console.log("hi...");
          alert("Added Success...");
          $scope.measurement = [];
        };
        ;
      });
    };

    $scope.activeReviewButtonOnMeasure = function (event) {
      if (event.which == 13) {
        document.getElementById("reviewBtn").focus();
      }
    };

    $scope.openReviewModal = function () {
      $('#reviewModal').modal('show');
    }
  });
