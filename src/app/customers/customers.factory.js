(function() {
    'use strict';

    angular
        .module('app.customers')
        .factory('CustomersFactory', CustomersFactory);

    CustomersFactory.$inject = ['$http', 'apiUrl'];

    /* @ngInject */
    function CustomersFactory($http, apiUrl) {
        var service = {
            getAll: getAll,
            getById: getById,
            update: update,
            create: create,
            remove: remove
        };

        return service;

        function getAll() {
            return $http
                .get(apiUrl + 'customers/')
                .then(function(response) {
                    return response.data;
                });
        }

        function getById(id) {
            return $http
                .get(apiUrl + 'customers/' + id)
                .then(function(response) {
                    return response.data;
                });
        }

        function update(id, customers) {
            return $http.put(apiUrl + 'customers/' + id, customers);
        }

        function create(customers) {
            return $http
                .post(apiUrl + 'customers/', customers)
                .then(function(response) {
                    return response.data;
                });
        }

        function remove(id) {
            return $http
                .delete(apiUrl + 'customers/' + id)
                .then(function(response) {
                    return response.data;
                });
        }
    }
})();
