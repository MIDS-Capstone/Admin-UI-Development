

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

    /* 
    , {
      headers: {
          withCredentials: true, 
           headers:{ 'Authorization':  'Basic ' + btoa($scope.user + ":" + $scope.password)}

      }
    }
  */
    $http.get('http://192.168.1.118:5001/api/v1.0/simulations/' + $stateParams.id)
        .success(function (data)
        {
          $scope.simulation = data.simulation;
        }); 
   
    $scope.pagelink = function(id) {
      return '/#/dashboard/' + id;
    };
  }

})();
