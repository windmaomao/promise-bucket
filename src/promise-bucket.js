"use strict";

angular
    .module('fangAngular', [])
    .service('PromiseBucket', function($q, $log) {
        // log
        this.log = function(name) {
            $log.info(name);
        };
        // call the promise
        this.hit = function(name, promise) {
            this.log(name);
            if (promise) {
                return promise();
            } else {
                throw new Error('Promise is not valid');
            }
        };
    })
;
