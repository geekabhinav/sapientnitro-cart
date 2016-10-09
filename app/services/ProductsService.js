'use strict';
var angular = require('angular');

function ProductsService($http, $rootScope){
    var productList = [];

    this.addProduct = function (product_options) {
        productList.push(product_options);
    }

    this.fetchProducts = function($http, $rootScope){
        var apiResponse = $http.get("https://hackerearth.0x10.info/api/nitro_deals?type=json&query=list_deals");

        apiResponse.success(function(data, status, headers, config) {
            angular.forEach(data.deals, function(key, value){
                productList.push(value)
            });
            $rootScope.$broadcast('PRODUCTS_FETCHED', data.deals);
        });
        apiResponse.error(function(data, status, headers, config) {
            console.log("AJAX failed!");
        });
    }

    this.getStoredProducts = function() {
        return productList;
    }
}

angular.module('nitroCart')
    .service('ProductsService', [ '$http', '$rootScope', ProductsService]);