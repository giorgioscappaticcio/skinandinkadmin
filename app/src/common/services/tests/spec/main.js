'use strict';

describe('Service: common/main', function () {

  // load the service's module
  beforeEach(module('adminApp'));

  // instantiate service
  var common/main;
  beforeEach(inject(function (_common/main_) {
    common/main = _common/main_;
  }));

  it('should do something', function () {
    expect(!!common/main).toBe(true);
  });

});
