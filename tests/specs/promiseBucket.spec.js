'use strict';

describe('Promise bucket', function() {

    beforeEach(module('fangAngular'));

    var pb, $q, scope;
    beforeEach(inject(function(PromiseBucket, _$q_, $rootScope) {
        pb = PromiseBucket;
        $q = _$q_;
        scope = $rootScope;
    }));

    it('should call the function and return', function() {
        var f = function() { return 1; };
        expect(pb.hit('f', f)).toBe(1);
    });

    it('should raise error if function is not valid', function() {
        expect(function() { pb.hit(); }).toThrow();
    });

    it('should call the promise and resolve', function() {
        var f = function() { return $q.when(1); };
        var result;
        pb.hit('f', f).then(function(res) {
            result = res;
        });
        scope.$apply();
        expect(result).toBe(1);
    })

});
