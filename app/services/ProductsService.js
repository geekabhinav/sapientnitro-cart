'use strict';
var angular = require('angular');

function ProductsService($http, $rootScope){
    var productList = [];
    var productTags = [];

    this.fetchProducts = function($http, $rootScope){
        var apiResponse = $http.get("https://hackerearth.0x10.info/api/nitro_deals?type=json&query=list_deals");

        apiResponse.success(function(data, status, headers, config) {
            angular.forEach(data.deals, function(product, key){
                productList.push(product);
                for(var i=0;i<product.tags.length;i++) {
                    productTags.push(product.tags[i]);
                }
            });
            console.log(productTags, productList);
            $rootScope.$broadcast('PRODUCTS_FETCHED', {products: data.deals, productTags: productTags});
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