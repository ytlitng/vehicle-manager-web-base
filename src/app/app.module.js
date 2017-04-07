(function() {
    'use strict';

    angular
        .module('app', [
          'ui.router',
          'ui.select',
          'ngSanitize',
          'oitozero.ngSweetAlert',
          'app.dashboard',
          'app.customers',
          'app.sales',
          'app.vehicles'

        ])
        .value('apiUrl', 'https://cl-vehicle-api.azurewebsites.net/api/')
        .config(function($stateProvider, $urlRouterProvider){
          $urlRouterProvider.otherwise('/dashboard');

          //COnfigure each one of our states.
          $stateProvider
          .state('dashboard', {
            url: '/dashboard', //http//loaclhost3000/#/dashboard
            controller: 'DashboardController as dashboardCtrl', //ng-controller
            templateUrl: 'app/dashboard/dashboard.html'
          })
          .state('customers.grid', {
            url: '/grid',
            controller: 'CustomerGridController as customerGridCtrl',
            templateUrl: 'app/customers/customers.grid.html'
          })
          .state('customers.detail', {
            url: '/detail/:id',
            controller: 'CustomersDetailController as customerDetailCtrl',
            templateUrl: 'app/customers/customers.detail.html'
          })
          .state('customers', {
            url: '/customers',
            abstract: true,
            template: '<div ui-view></div>'
          })
          .state('sales.grid', {
            url: '/grid',
            controller: 'SalesGridController as salesGridCtrl',
            templateUrl: 'app/sales/sales.grid.html'
          })
          .state('sales.detail', {
            url: '/detail/:id',
            controller: 'SalesDetailController as SalesDetailCtrl',
            templateUrl: 'app/sales/sales.detail.html'
          })
          .state('sales', {
            url: '/sales',
            abstract: true,
            template: '<div ui-view></dev>'
          })
          .state('vehicles.grid', {
            url: '/grid',
            controller: 'VehiclesGridController as vehiclesGridCtrl',
            templateUrl: 'app/vehicles/vehicles.grid.html'
          })
          .state('vehicles.detail', {
            url: '/detail/:id',
            controller: 'VehiclesDetailController as VehiclesDetailCtrl',
            templateUrl: 'app/vehicles/vehicles.detail.html'
          })
          .state('vehicles', {
            url: '/vehicles',
            abstract: true,
            template: '<div ui-view></dev>'
          });
          });
        }());
