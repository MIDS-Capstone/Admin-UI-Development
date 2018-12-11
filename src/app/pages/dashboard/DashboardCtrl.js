/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardCtrl', DashboardCtrl);

  /** @ngInject */
  function DashboardCtrl($scope, $http, $stateParams, $filter, editableOptions, editableThemes) {
    
    $scope.simulation = {};
    
    $http.get('http://192.168.1.118:5001/api/v1.0/simulations/' + $stateParams.id)
    .then(function(response){
      $scope.simulation = response.data.simulation;        
    });
    
    $scope.pagelink = function(id) {
      return '/#/dashboard/' + id;
    };

  }

})();
