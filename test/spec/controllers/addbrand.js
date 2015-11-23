'use strict';

describe('Controller: AddbrandCtrl', function () {

  // load the controller's module
  beforeEach(module('userAppApp'));

  var AddbrandCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddbrandCtrl = $controller('AddbrandCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddbrandCtrl.awesomeThings.length).toBe(3);
  });
});
