(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersDetailController', CustomersDetailController);

    CustomersDetailController.$inject = ['customersFactory', 'SweetAlert', '$stateParams'];

    /* @ngInject */
    function CustomersDetailController(customersFactory, SweetAlert, $stateParams) {
        var vm = this;

        vm.save = save;

        activate();

        function save() {
          customersFactory
          .update(vm.customer.customerId, vm.customer)
          .then(function() {
            SweetAlert.swal("Customer Saved!", "You are on fire today!", "success"); 
          })
        }

        function activate() {
          customersFactory
          .getById($stateParams.id)
          .then(function(customer) {
            vm.customer = customer;
          })
          .catch(function(error){
          alert(error);
        })
        }
      }

})();
