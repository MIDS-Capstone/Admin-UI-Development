

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardCtrl', DashboardCtrl);

  /* must be moved when login page added */
  $scope.user = 'admin'
  $scope.password = 'admin'

  $http.defaults.headers.common['Authorization'] = 'Basic ' + btoa($scope.user + ":" + $scope.password);

  /** @ngInject */
  function DashboardCtrl($scope, $http, $stateParams, $filter, editableOptions, editableThemes) {

    $scope.simulation = []
    $http.defaults.headers.common['Authorization'] = 'Basic ' + btoa($scope.user + ":" + $scope.password)};

    activate();

    function activate() {
      return $http.get('http://192.168.1.118:5001/api/v1.0/simulations/' + $stateParams.id)
        .then(function (promise)	        
        {
          $scope.simulation = promise.data.simulation;
        }); 	     
    };

    $scope.pagelink = function(id) {
      return '/#/dashboard/' + id;
    };
  }

)();
