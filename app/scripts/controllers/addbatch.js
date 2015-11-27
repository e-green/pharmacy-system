'use strict';

/**
 * @ngdoc function
 * @name userAppApp.controller:AddbatchCtrl
 * @description
 * # AddbatchCtrl
 * Controller of the userAppApp
 */
angular.module('userAppApp')
  .controller('AddbatchCtrl', function ($scope, itemService, batchService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.form = {
      errors: []
    };
    $scope.allItems = [];
    itemService.getAllItem().then(function (data) {
      console.log(data);
      if (data != null) {
        $scope.allItems = data;
      }
      ;
    });
    $scope.item={
      "itemId":"",
      "itemName":""
    };

    $scope.batch = {
      "batchid": "",
      "datetime": null,
      "itemId": "",
      "itemName": "",
      "qty": "",
      "expdate": "",
      "buyingPrice": "",
      "sellingPrice": ""
    };


    $(document).ready(function () {
      $('[data-toggle="popover"]').popover();
    });

    function isInt(value) {
      return !isNaN(value) && (function (x) {
          return (x | 0) === x;
        })(parseFloat(value))
    };

    $scope.saveBatch = function () {
      $scope.form.errors = [];

      if ($scope.batch.datetime == '') {
        console.log("Error");
        $scope.form.errors.push("Error");
        $('#datetime').popover();
        var popover = $('#datetime').data('bs.popover');
        popover.options.content = 'Select valid Date.';
        popover.options.placement = "right";
        $('#datetime').popover('show');
        $('#datetime').next('.popover');
      } else {
        $('#datetime').popover('hide');
      }
      if ($scope.batch.name == '') {
        console.log("Error");
        $scope.form.errors.push("Error");
        $('#name').popover();
        var popover = $('#name').data('bs.popover');
        popover.options.content = 'Select valid Item Name.';
        popover.options.placement = "right";
        $('#name').popover('show');
        $('#name').next('.popover');
      } else {
        $('#name').popover('hide');
      }
      if ($scope.batch.qty == '') {
        console.log("Error");
        $scope.form.errors.push("Error");
        $('#qty').popover();
        var popover = $('#qty').data('bs.popover');
        popover.options.content = 'Enter valid Qty.';
        popover.options.placement = "right";
        $('#qty').popover('show');
        $('#qty').next('.popover');
      } else {
        $('#qty').popover('hide');
      }
      if ($scope.batch.expdate == '') {
        console.log("Error");
        $scope.form.errors.push("Error");
        $('#expdate').popover();
        var popover = $('#expdate').data('bs.popover');
        popover.options.content = 'Select valid Expire Date.';
        popover.options.placement = "right";
        $('#expdate').popover('show');
        $('#expdate').next('.popover');
      } else {
        $('#expdate').popover('hide');
      }
      ;
      if ($scope.batch.buyingPrice == '') {
        console.log("Error");
        $scope.form.errors.push("Error");
        $('#buyingPrice').popover();
        var popover = $('#buyingPrice').data('bs.popover');
        popover.options.content = 'Enter valid Buying Price.';
        popover.options.placement = "right";
        $('#buyingPrice').popover('show');
        $('#buyingPrice').next('.popover');
      } else {
        $('#buyingPrice').popover('hide');
      }
      ;
      if ($scope.batch.sellingPrice == '') {
        console.log("Error");
        $scope.form.errors.push("Error");
        $('#sellingPrice').popover();
        var popover = $('#sellingPrice').data('bs.popover');
        popover.options.content = 'Enter valid Selling Price.';
        popover.options.placement = "right";
        $('#sellingPrice').popover('show');
        $('#sellingPrice').next('.popover');
      } else {
        $('#sellingPrice').popover('hide');
      }
      ;
      if ($scope.form.errors.length > 0) {
        return;
      }
      ;
      //var itemModel =[];
      console.log("$scope.item :" + $scope.itemCombo);
      var itemModel = $scope.itemCombo;
      var itemM =itemModel.split(",");
      var itemModelId=itemM[0].split(":");
      var itemModelName=itemM[1].split(":");
      var id=itemModelId[1]
      var name=itemModelName[1];
      $scope.batch.itemId=id;
      $scope.batch.itemName=name.replace(/"/g,'');

      console.log("$scope.batch.itemId :"+$scope.batch.itemId);
      console.log(" $scope.batch.itemName:"+ $scope.batch.itemName);
      if ($scope.batch && $scope.batch.itemId) {

        batchService.addBatch($scope.batch).then(function (data) {
          if (data != null) {
            alert("added...");
            $scope.batch = [];
          }
        });
      }


    };

    $scope.openReviewModalInAddBatch = function () {
      $('#reviewModal').modal('show');
    };

  });
