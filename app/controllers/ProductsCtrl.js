'use strict';
var Typeahead = require('../../node_modules/typeahead/typeahead')

var angular = require('angular');

angular.module('nitroCart', ['ngOrderObjectBy'])
    .controller("ProductsCtrl", [
        '$scope',
        '$http',
        '$rootScope',
        'ProductsService',
        'ApiService',
        function($scope, $http, $rootScope, ProductsService, ApiService) {
            var searchInput = document.getElementById('searchQuery');
            // Fetch products from HackerEarth API asynchronously
            ProductsService.fetchProducts($http, $rootScope);
            // On success, update the view
            $scope.$on('PRODUCTS_FETCHED', function (e, data) {
                $scope.products = data.products;
                $scope.productTags = data.productTags;
                // Typeahead hook for searchQuery field
                Typeahead(searchInput, {
                    source: $scope.productTags
                });
            })

            // Fetch api_hits from HackerEarth API asynchronously
            ApiService.fetchApiHits($http, $rootScope);
            // On success, update the view
            $scope.$on('API_HITS_FETCHED', function (e, data) {
                $scope.api_hits = data
            })

            // OrderBy logic. Default order: none
            $scope.orderPropertyName = '';
            $scope.reverse = true;
            $scope.sortBy = function(orderPropertyName) {
                if(orderPropertyName === null) { // reset the order
                    $scope.orderPropertyName = ''
                    return true;
                }
                $scope.reverse = ($scope.orderPropertyName === orderPropertyName) ? !$scope.reverse : false;
                $scope.orderPropertyName = orderPropertyName;
            }

            // Filtering logic -> Search form model
            $scope.filterQuery = {};
            $scope.searchForm = {}
            $scope.searchForm.submit = function () {
                if($scope.searchForm.query === undefined)
                    $scope.filterQuery = {}
                else
                    $scope.filterQuery = { tags: $scope.searchForm.query }
            }
            document.addEventListener("change", function(e) {
                searchInput.value = e.target.value;
                $scope.searchForm.query = e.target.value;
                $scope.searchForm.submit()
            })
        }]);