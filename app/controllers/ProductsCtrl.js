'use strict';

var angular = require('angular');

angular.module('nitroCart', ['ngOrderObjectBy'])
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
            $scope.orderPropertyName = 'age';
            $scope.reverse = true;

            $scope.sortBy = function(orderPropertyName) {
                $scope.reverse = ($scope.orderPropertyName === orderPropertyName) ? !$scope.reverse : false;
                $scope.orderPropertyName = orderPropertyName;
            };
        }]);