/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('LineChartProfitCtrl', LineChartProfitCtrl);

  /** @ngInject */
  function LineChartProfitCtrl($scope, baConfig, $element, layoutPaths) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var lineChart = AmCharts.makeChart(id, {
      type: 'serial',
      theme: 'blur',
      color: layoutColors.defaultText,
      marginTop: 0,
      marginRight: 15,
      dataProvider: [
		{
          x: 0,
          y: 0
        },
        {
          x: 2500,
          y: 17000000
        },
        {
          x: 3000,
          y: 34000000
        },
        {
          x: 5000,
          y: 45000000
        },
        {
          x: 7500,
          y: 57000000
        },
        {
          x: 10000,
          y: 72000000
        }
      ],
      valueAxes: [
        {
          axisAlpha: 0,
          position: 'left',
          gridAlpha: 0.5,
          gridColor: layoutColors.border,
		  title: 'Cumulative profit, USD'
        }
      ],
      graphs: [
        {
          id: 'g1',
          balloonText: '[[y]]',
          bullet: 'round',
          bulletSize: 8,
          lineColor: layoutColors.danger,
          lineThickness: 1,
          negativeLineColor: layoutColors.warning,
          type: 'smoothedLine',
          valueField: 'y'
        }
      ],
      chartScrollbar: {
        graph: 'g1',
        gridAlpha: 0,
        color: layoutColors.defaultText,
        scrollbarHeight: 55,
        backgroundAlpha: 0,
        selectedBackgroundAlpha: 0.05,
        selectedBackgroundColor: layoutColors.defaultText,
        graphFillAlpha: 0,
        autoGridCount: true,
        selectedGraphFillAlpha: 0,
        graphLineAlpha: 0.2,
        selectedGraphLineColor: layoutColors.defaultText,
        selectedGraphLineAlpha: 1
      },
      chartCursor: {
        cursorAlpha: 0,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        valueLineAlpha: 0.5,
        fullWidth: true
      },
      categoryField: 'x',
      categoryAxis: {
        minorGridAlpha: 0.1,
        minorGridEnabled: true,
        gridAlpha: 0.5,
        gridColor: layoutColors.border,
      },
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      pathToImages: layoutPaths.images.amChart
    });

    lineChart.addListener('rendered', zoomChart);
    if (lineChart.zoomChart) {
      lineChart.zoomChart();
    }

    function zoomChart() {
      lineChart.zoomToIndexes(Math.round(lineChart.dataProvider.length * 0.4), Math.round(lineChart.dataProvider.length * 0.55));
    }
  }

})();