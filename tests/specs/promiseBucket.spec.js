'use strict';

describe('Promise bucket', function() {

  beforeEach(module('fangAngular'));

  var pb;
  beforeEach(inject(function(PromiseBucket) {
      pb = PromiseBucket;
  }));

  it('should run', function() {
    expect(1).toBe(1);
  });

});
