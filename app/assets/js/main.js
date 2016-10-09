// === CSS dependencies ===
require('../css/style.scss');

// === JS dependencies ===
const jQuery = require('../../../node_modules/jquery/src/jquery');
require('../../../node_modules/bootstrap-sass/assets/javascripts/bootstrap');
require('../../../node_modules/angular/index');
// require('../../../node_modules/angular-ui-router/release/angular-ui-router');

angular.module('nitroCart', [])
require('./vendor/ng-order-object-by');
require('../../controllers/ProductsCtrl');
require('../../services/ProductsService');
require('../../services/ApiService');

// === View dependencies ===
require('../../index.html');
require('../imgs/shopping-cart-favicon.png');