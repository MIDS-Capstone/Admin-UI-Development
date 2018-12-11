

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tables')
      .controller('TablesPageCtrl', TablesPageCtrl);

  /** @ngInject */
  function TablesPageCtrl($scope, $http, $filter, editableOptions, editableThemes) {

    /*
    $scope.user = 'admin';
    $scope.password = 'admin';
    $http.defaults.headers.common['Authorization'] = 'Basic ' + btoa($scope.user + ":" + $scope.password);
    */
    $scope.navigation_items = {};
    
    $http.get('http://192.168.1.118:5001/api/v1.0/navigation')
    .then(function(response){
      $scope.navigation_items = response.data.navigation_items;   
    });
   
    $scope.pagelink = function(id) {
      return '/#/dashboard/' + id;
    };
    
  }

})();
