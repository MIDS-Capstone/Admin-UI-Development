/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('BarChartCtrl', BarChartCtrl);

  /** @ngInject */
  function BarChartCtrl($scope, baConfig, $element, layoutPaths) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var barChart = AmCharts.makeChart(id, {
      type: 'serial',
      theme: 'blur',
      color: layoutColors.defaultText,
      dataProvider: [
/*         {
          country: 'USA',
          visits: 3025,
          color: layoutColors.primary
        },
        {
          country: 'China',
          visits: 1882,
          color: layoutColors.danger

        },
        {
          country: 'Japan',
          visits: 1809,
          color: layoutColors.info
        }, */
        {
          peril: 'US-W',
          value: 196000000,
          color: layoutColors.success
        },
        {
          peril: 'US-Q',
          value: 196000000,
          color: layoutColors.warning
        },
        {
          peril: 'US-FL',
          value: 150000000,
          color: layoutColors.primaryLight
        }
      ],
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
  }
})();
