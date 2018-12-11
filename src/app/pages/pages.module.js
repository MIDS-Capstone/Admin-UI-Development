/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
      'ui.router',
      'BlurAdmin.pages.dashboard',
      //'BlurAdmin.pages.ui',
      //'BlurAdmin.pages.components',
      'BlurAdmin.pages.form',
      'BlurAdmin.pages.tables',
      //'BlurAdmin.pages.charts',
      //'BlurAdmin.pages.profile'
    ]).config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/tables');

    baSidebarServiceProvider.addStaticItem({
      title: 'Pages',
      icon: 'ion-document',
      subMenu: [{
        title: 'Sign In',
        fixedHref: 'auth.html',
        blank: true
      }]
    });

  }

})();
