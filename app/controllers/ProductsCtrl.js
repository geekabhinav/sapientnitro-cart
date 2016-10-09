'use strict';

var angular = require('angular');

angular.module('nitroCart')
    .controller("ProductsCtrl", [
        '$scope',
        '$http',
        '$rootScope',
        'ProductsService',
        function($scope, $http, $rootScope, ProductsService) {
            ProductsService.fetchProducts($http, $rootScope);
            $scope.$on('PRODUCTS_FETCHED', function (e, data) {
                console.log('ctrl', data)
                $scope.products = data;
            })

            // #TODO: IMPLEMEMT FILTERS

/*
            $scope.filter = '$';
            $scope.getFilter = function(sort_by, sort_order) {

            }
*/

            $scope.sortBy = function(sortby, sort_order) {
                console.log(sortby, sort_order);
                $scope.products = [$scope.products[1]];
            }
        }]);