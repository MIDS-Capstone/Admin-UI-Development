

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

    $http.get('http://192.168.1.118:5001/api/v1.0/navigation')
        .success(function (data)
        {
          //$scope.navigation_items = data.navigation_items;
        });

    $scope.navigation_items =  [
      {
          "id":1, 
          "created_user": "sstorey",
          "created_datetime": "2018-10-17T16:32:42.676619",
          "description": "...",
                      "name": "$10b US W contract",
          "status": "PENDING",
                      "uri": "http://127.0.0.1:5001/api/v1.0/auctions/1"
      }   
    ]
   
    $scope.pagelink = function(id) {
      return '/#/dashboard/' + id;
    };
  }

})();
