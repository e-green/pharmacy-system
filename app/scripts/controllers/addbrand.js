'use strict';

/**
 * @ngdoc function
 * @name userAppApp.controller:AddbrandCtrl
 * @description
 * # AddbrandCtrl
 * Controller of the userAppApp
 */
angular.module('userAppApp')
  .controller('AddbrandCtrl', function ($scope) {
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
    $scope.activeInitialize = function (event) {
      if (event.which === 13) {
        console.log("TAB activated");
        console.log(event);
        document.getElementById("initials").focus();
      }
    };
    $scope.activeTitleSelect = function (event) {
      if (event.which === 13) {
        document.getElementById("title").focus();
      }
    };
    $scope.activeNic = function (event) {
      if (event.which === 13) {
        document.getElementById("nic").focus();
      }
    };
    $scope.activeReviewButton = function (event) {
      if (event.which == 13) {
        document.getElementById("reviewBtn").focus();
      }
    };

    $scope.openReviewModal = function () {
      $('#reviewModal').modal('show');
    }
  });
