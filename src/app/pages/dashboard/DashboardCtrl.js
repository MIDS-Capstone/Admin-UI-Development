

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

    $http.get('http://192.168.1.118:5001/api/v1.0/simulations/' + $stateParams.id)
        .success(function (data)
        {
          //$scope.simulation = data.simulations;
        });

    $scope.simulation =  
        {
            "charts": {
                "AVERAGE_PROFIT_PER_TRADE": [
                    [
                        0,
                        0
                    ],
                    [
                        2500,
                        970000
                    ],
                    [
                        3000,
                        1400000
                    ],
                    [
                        5000,
                        1750000
                    ],
                    [
                        7500,
                        2300000
                    ],
                    [
                        10000,
                        2800000
                    ]
                ],
                "CUMULATIVE_LOSS": [
                    [
                        0,
                        0
                    ],
                    [
                        2500,
                        -6000000
                    ],
                    [
                        3000,
                        -8000000
                    ],
                    [
                        5000,
                        -15000000
                    ],
                    [
                        7500,
                        -20000000
                    ],
                    [
                        10000,
                        -23000000
                    ]
                ],
                "CUMULATIVE_PROFIT": [
                    [
                        0,
                        0
                    ],
                    [
                        2500,
                        17000000
                    ],
                    [
                        3000,
                        34000000
                    ],
                    [
                        5000,
                        45000000
                    ],
                    [
                        7500,
                        57000000
                    ],
                    [
                        10000,
                        72000000
                    ]
                ],
                "EXCEEDANCE_PROBABILITY_CURVE": 
                [
                  {
                      simulation: 0,
                      value: 0,
                  },
                  {
                    simulation: 2500,
                    value: 75000000,
                },
                {
                  simulation: 3000,
                  value: 100000000,
              },
              {
                simulation: 5000,
                value: 120000000,
            },
            {
              simulation: 7500,
              value: 125000000,
          },
          {
            simulation: 10000,
            value: 130000000,
        },
              ],
                "PERC_TRADES_PROFITABLE": [
                    {
                        simulation: 0,
                        value: 0,
                    },
                    {
                      simulation: 2500,
                      value: 10,
                  },
                  {
                    simulation: 3000,
                    value: 27,
                },
                {
                  simulation: 5000,
                  value: 40,
              },
              {
                simulation: 7500,
                value: 80.2,
            },
            {
              simulation: 10000,
              value: 93.25,
          },
                ],
                "RISK_PROFILE": [
                    {
                        peril: "US-W",
                        value: 196000000
                    },
                    {
                        peril: "US-Q",
                        value: 37000000
                    },
                    {
                        peril: "US-FL",
                        value: 150000000
                    }
                ]
            },
            "created_datetime": "2018-12-07 03:21:11",
            "created_user": "sstorey",
            "kpis": {
                "AVG_PROFIT_PER_TRADE": 2800000,
                "LOSSES": -23000000,
                "PERC_TRADES_PROFITABLE": 93.25,
                "PROFIT": 72000000,
                "TVAR9900": 100000000,
                "TVAR9990": 140000000,
                "TVAR9999": 120000000,
                "VAR9500": 65000000,
                "VAR9900": 80000000
            },
            "parameters": {
                "PORTFOLIO_NAME": "Algo Portfolio",
                "PORTFOLIO_NAV": 250000000
            },
            "uri": "http://127.0.0.1:5001/api/v1.0/simulations/2"
        };
    
   
    $scope.pagelink = function(id) {
      return '/#/dashboard/' + id;
    };
  }

})();
