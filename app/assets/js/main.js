// === CSS dependencies ===
require('../css/style.scss');

// === JS dependencies ===
// const jQuery = require('../../../node_modules/jquery/src/jquery');
// require('../../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js');
require('../../../node_modules/angular/index');
require('../../../node_modules/angular-ui-router/release/angular-ui-router');

angular.module('nitroCart', [ 'ui.router' ])
require('./ng-order-object-by');
require('../../controllers/ProductsCtrl');
require('../../services/ProductsService');

// === View dependencies ===
require('../../index.html');