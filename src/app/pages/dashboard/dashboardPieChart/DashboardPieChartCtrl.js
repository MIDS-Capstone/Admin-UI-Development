/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardPieChartCtrl', DashboardPieChartCtrl);

  /** @ngInject */
  function DashboardPieChartCtrl($scope, $timeout, baConfig, baUtil) {
    var pieColor = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);
    
    /*
    $scope.charts = [{
      color: pieColor,
      description: 'TVar99',
      stats: '129,500,000',
      icon: 'face',
    }, {
      color: pieColor,
      description: 'Profit',
      stats: '72,000,000',
      icon: 'money',
    }, {
      color: pieColor,
      description: 'Losses',
      stats: '(23,000,000)',
      icon: 'money',
    }, {
      color: pieColor,
      description: '% Trades Profitable',
      stats: '93.25',
      icon: 'money',
    }, {
      color: pieColor,
      description: 'Avg. Profit per Trade',
      stats: '2,800,000',
      icon: 'money',
    }
    ];
*/
  


    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    function loadPieCharts() {
      $('.chart').each(function () {
        var chart = $(this);
        chart.easyPieChart({
          easing: 'easeOutBounce',
          onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          },
          barColor: chart.attr('rel'),
          trackColor: 'rgba(0,0,0,0)',
          size: 84,
          scaleLength: 0,
          animation: 2000,
          lineWidth: 9,
          lineCap: 'round',
        });
      });

      $('.refresh-data').on('click', function () {
        updatePieCharts();
      });
    }

    function updatePieCharts() {
      $('.pie-charts .chart').each(function(index, chart) {
        $(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
      });
    }

    $timeout(function () {
      loadPieCharts();
      updatePieCharts();
    }, 1000);
  }
})();