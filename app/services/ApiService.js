'use strict';
var angular = require('angular');

function ApiService($http, $rootScope){
    this.fetchApiHits = function($http, $rootScope){
        var apiResponse = $http.get("https://hackerearth.0x10.info/api/nitro_deals?type=json&query=api_hits");

        apiResponse.success(function(data, status, headers, config) {
            $rootScope.$broadcast('API_HITS_FETCHED', data.api_hits);
        });
        apiResponse.error(function(data, status, headers, config) {
            console.log("AJAX failed!");
        });
    }
}

angular.module('nitroCart')
    .service('ApiService', [ '$http', '$rootScope', ApiService]);