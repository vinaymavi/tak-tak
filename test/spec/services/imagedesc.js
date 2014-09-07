'use strict';

describe('Service: imageDesc', function () {

  // load the service's module
  beforeEach(module('persistentInterViewApp'));

  // instantiate service
  var imageDesc;
  beforeEach(inject(function (_imageDesc_) {
    imageDesc = _imageDesc_;
  }));

  it('should do something', function () {
    expect(!!imageDesc).toBe(true);
  });

});
