/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('RiskProfileCtrl', RiskProfileCtrl);

  /** @ngInject */
  function RiskProfileCtrl($scope, baConfig, $element, layoutPaths) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    
    /* dataProvider: Add all metarisk buckets here */

    var barChart = AmCharts.makeChart(id, {
      type: 'serial',
      theme: 'blur',
      color: layoutColors.defaultText,
      dataProvider: [{ "peril": 'US-W', "value": 0 },{ "peril": 'US-Q', "value": 0},{ "peril": 'EUR-W', "value": 0}],
      valueAxes: [
        {
          axisAlpha: 0,
          position: 'left',
          title: 'Portfolio peril exposure, USD',
          gridAlpha: 0.5,
          gridColor: layoutColors.border,
        }
      ],
      startDuration: 1,
      graphs: [
        {
          balloonText: '<b>[[category]]: [[value]]</b>',
          fillColorsField: 'color',
          fillAlphas: 0.7,
          lineAlpha: 0.2,
          type: 'column',
          valueField: 'value'
        }
      ],
      chartCursor: {
        categoryBalloonEnabled: false,
        cursorAlpha: 0,
        zoomable: false
      },
      categoryField: 'peril',
      categoryAxis: {
        gridPosition: 'start',
        labelRotation: 45,
        gridAlpha: 0.5,
        gridColor: layoutColors.border,
      },
      export: {
        enabled: true
      },
      creditsPosition: 'top-right',
      pathToImages: layoutPaths.images.amChart
    });

    $scope.$watch('simulation', function () {      
      if ($scope.simulation.charts){
          barChart.dataProvider = $scope.simulation.charts.RISK_PROFILE;
          barChart.validateData();   
        } 
      }, true);

     
  }
})();
