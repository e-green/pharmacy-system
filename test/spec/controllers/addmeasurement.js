'use strict';

describe('Controller: AddmeasurementCtrl', function () {

  // load the controller's module
  beforeEach(module('userAppApp'));

  var AddmeasurementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddmeasurementCtrl = $controller('AddmeasurementCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddmeasurementCtrl.awesomeThings.length).toBe(3);
  });
});
