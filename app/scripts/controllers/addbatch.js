'use strict';

/**
 * @ngdoc function
 * @name userAppApp.controller:AddbatchCtrl
 * @description
 * # AddbatchCtrl
 * Controller of the userAppApp
 */
angular.module('userAppApp')
  .controller('AddbatchCtrl', function ($scope) {
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
    $scope.openReviewModalInAddBatch = function () {
      $('#reviewModal').modal('show');
    }

  });
