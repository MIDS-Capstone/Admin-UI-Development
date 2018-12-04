'use strict';

angular.module('BlurAdmin', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.sortable',
  'ui.router',
  'ngTouch',
  'toastr',
  'smart-table',
  "xeditable",
  'ui.slimscroll',
  'ngJsTree',
  'angular-progress-button-styles',

  'BlurAdmin.theme',
  'BlurAdmin.pages'
]);

// var App = angular.module('App', []);

// App.controller('test_data', function($scope, $http)){
//   $http.get('test_data.json')
//        .then(function(res){
//           $scope.test_data = res.data;
//        });
// };