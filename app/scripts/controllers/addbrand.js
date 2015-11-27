'use strict';

/**
 * @ngdoc function
 * @name userAppApp.controller:AddbrandCtrl
 * @description
 * # AddbrandCtrl
 * Controller of the userAppApp
 */
angular.module('userAppApp')
  .controller('AddbrandCtrl', function ($scope, brandService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.form = {
      errors: []
    };

    $scope.brand = {
      "brandId": "",
      "brandName": "",
      "permanentBrand": "",
      "datetime": null

    }
    $(document).ready(function () {
      $('[data-toggle="popover"]').popover();
    });

    function isInt(value) {
      return !isNaN(value) && (function (x) {
          return (x | 0) === x;
        })(parseFloat(value))
    };

    $scope.saveBrand = function () {
      $scope.form.errors = [];

      if ($scope.brand.brandName == '') {
        console.log("Error");
        $scope.form.errors.push("Error");
        $('#name').popover();
        var popover = $('#name').data('bs.popover');
        popover.options.content = 'Enter valid name.';
        popover.options.placement = "right";
        $('#name').popover('show');
        $('#name').next('.popover');
      } else {
        $('#name').popover('hide');
      }
      if ($scope.brand.permanentBrand == '') {
        console.log("Error");
        $scope.form.errors.push("Error");
        $('#permanentBrand').popover();
        var popover = $('#permanentBrand').data('bs.popover');
        popover.options.content = 'Enter valid Permanent Brand.';
        popover.options.placement = "right";
        $('#permanentBrand').popover('show');
        $('#permanentBrand').next('.popover');
      } else {
        $('#permanentBrand').popover('hide');
      }
      if ($scope.form.errors.length > 0) {
        return;
      }
      ;
      brandService.addBrand($scope.brand).then(function (data) {
        if (data != null) {
          alert("added");
          $scope.brand = {
            "brandId": "",
            "brandName": "",
            "permanentBrand": "",
            "datetime": null

          }
        }
      });
    };

    $scope.activeReviewPerment = function (event) {
      if (event.which === 13) {
        document.getElementById("permanentBrand").focus();
      }
    };
    $scope.activeReviewBtnBrand = function (event) {
      if (event.which === 13) {
        document.getElementById("reviewBtn").focus();
      }
    };

    $scope.openReviewModal = function () {
      $('#reviewModal').modal('show');
    }
  });
