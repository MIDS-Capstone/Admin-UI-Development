/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form', ['ui.select', 'ngSanitize'])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('form', {
          url: '/form',
          template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Contract Pricer',
          sidebarMeta: {
            icon: 'ion-compose',
            order: 250,
          },
        })
		.state('form.pricer', {
          url: '/query',
          templateUrl: 'app/pages/form/pricer/pricer.html',
          title: 'Instrument Query',
          sidebarMeta: {
            order: 100,
          },
        })
/*         .state('form.wizard',
        {
          url: '/wizard',
          templateUrl: 'app/pages/form/wizard/wizard.html',
          controller: 'WizardCtrl',
          controllerAs: 'vm',
          title: 'Form Wizard',
          sidebarMeta: {
            order: 200,
          },
        }); */
  }
})();
