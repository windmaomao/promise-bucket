"use strict";

angular
    .module('fangAngular', [])
    .service('PromiseBucket', function($log, $q) {
        // log
        this.log = function(name) {
            $log.info(name);
        };
        // resolve
        this.resolve = function(res) {
            return res;
        };
        // reject
        this.reject = function(res) {
            return res;
        };
        // call the promise
        this.hit = function(name, promise) {
            this.log(name);
            var that = this;
            // if promise is specified
            if (promise) {
                // if promise is a promise
                if (angular.isFunction(promise.then)) {
                    var deferred = $q.defer();
                    promise().then(function(res) {
                        deferred.resolve(that.resolve(res));
                    }, function(res) {
                        deferred.reject(that.reject(res));
                    });
                    return deferred.promise;
                } else {
                    return $q.when(promise());
                }
            } else {
                throw new Error('Promise is not valid');
            }
        };
    })
;
