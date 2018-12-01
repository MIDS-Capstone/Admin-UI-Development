/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('dashboardLineChart2', dashboardLineChart2);

  /** @ngInject */
  function dashboardLineChart2() {
    return {
      restrict: 'E',
      controller: 'DashboardLineChartCtrl2',
      templateUrl: 'app/pages/dashboard/dashboardLineChart2/dashboardLineChart2.html'
    };
  }
})();