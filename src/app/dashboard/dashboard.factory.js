(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .factory('dashboardFactory', dashboardFactory);

    dashboardFactory.$inject = ['dependencies'];

    /* @ngInject */
    function dashboardFactory(dependencies) {
        var service = {

        };

        return service;
    }
})();
