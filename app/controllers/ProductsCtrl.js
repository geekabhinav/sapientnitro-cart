'use strict';

var angular = require('angular');

angular.module('nitroCart')
    .controller("ProductsCtrl", function($scope) {
    $scope.products = [
        {
            "name": "Tommy Hilfiger backpack",
            "price": "1350",
            "purchased_by": "10",
            "rating": "3.8",
            "tags": [
                "backpack",
                "bag"
            ],
            "provider": "Amazon",
            "link": "http://www.amazon.in/s/ref=sr_nr_p_n_pct-off-with-tax_3?bbn=2454169031&fst=as%3Aoff&ie=UTF8&qid=1449163374&rh=n%3A2454169031%2Cp_4%3ATommy%20Hilfiger%2Cp_n_pct-off-with-tax%3A2665401031&rnid=2665398031&tag=desidime01-21&ascsubtag=16CL1Xdeals",
            "image": "https://hackerearth.0x10.info/api/img?img=http://cdn0.desidime.com/photos/66322/small/4jz0zI4.jpg"
        },
        {
            "name": "Redragon 3000DPI Mouse",
            "price": "1199",
            "purchased_by": "330",
            "rating": "4",
            "tags": [
                "mouse",
                "electronics"
            ],
            "provider": "Amazon",
            "link": "http://www.amazon.in/gp/product/B011HMDZ0Q",
            "image": "https://hackerearth.0x10.info/api/img?img=http://ecx.images-amazon.com/images/I/41AQgzqSOhL.jpg"
        },
        {
            "name": "Tresemme Smooth & Shine",
            "price": "350",
            "purchased_by": "250",
            "rating": "4.5",
            "tags": [
                "shampoo",
                "personal care"
            ],
            "provider": "Purplle",
            "link": "http://purplle.com/product/tresemme-smooth-and-shine-shampoo-580-m",
            "image": "https://hackerearth.0x10.info/api/img?img=http://www.tresemmeindia.com/Images/1890/1890-599879-Smooth__Silky_Shmpoo_300x400.png"
        },
        {
            "name": "Wings of Fire",
            "price": "325",
            "purchased_by": "2532",
            "rating": "50000",
            "tags": [
                "book",
                "kalam"
            ],
            "provider": "Flipkart",
            "link": "http://www.flipkart.com/wings-fire-autobiography-english-1st/p/itmdyu8fezqmmvhe",
            "image": "https://hackerearth.0x10.info/api/img?img=http://img6a.flixcart.com/image/book/4/6/6/wings-of-fire-an-autobiography-400x400-imaednuhwpknkmrr.jpeg"
        },
        {
            "name": "Freecharge Cashback (BILL150)",
            "price": "1650",
            "purchased_by": "10103",
            "rating": "3",
            "tags": [
                "online recharge",
                "cashback"
            ],
            "provider": "Freecharge",
            "link": "https://www.freecharge.in",
            "image": "https://hackerearth.0x10.info/api/img?img=http://offers.shoppiecart.com/wp-content/uploads/2016/08/freecharge_logo_official.jpg"
        },
        {
            "name": "Cleartrip Activities (ACTOFFER)",
            "price": "6000",
            "purchased_by": "50",
            "rating": "4",
            "tags": [
                "leisure",
                "activities"
            ],
            "provider": "Cleartrip",
            "link": "http://www.cleartrip.com/activities/india/",
            "image": "https://hackerearth.0x10.info/api/img?img=http://a1.mzstatic.com/us/r30/Purple3/v4/33/86/4d/33864dd5-2eac-5a6e-0480-c4a04d4af84d/screen1136x1136.jpeg"
        }
    ]
});