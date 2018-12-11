/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('kpi', kpiChart);

  /** @ngInject */
  function kpiChart() {
    return {
      restrict: 'E',
      controller: 'kpiCtrl',
      templateUrl: 'app/pages/dashboard/Kpis/kpi.html'
    };
  }
})();