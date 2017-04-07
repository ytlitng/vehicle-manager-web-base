(function() {
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesDetailController', SalesDetailController);

    SalesDetailController.$inject = ['salesFactory', 'CustomersFactory', 'VehiclesFactory', 'SweetAlert', '$stateParams'];

    /* @ngInject */
    function SalesDetailController(salesFactory, CustomersFactory, VehiclesFactory, SweetAlert, $stateParams) {
        var vm = this;

        vm.save = save;

        activate();

          function activate() {
            var saleId = $stateParams.id;

            CustomersFactory
            .getAll()
            .then(function(customer){
              vm.customers = customer;
            });

            VehiclesFactory
            .getAll()
            .then(function(vehicle){
              vm.vehicles = vehicle;
            });

          if(saleId) {
            salesFactory
            .getById(saleId)
            .then(function(sale) {
              vm.sale = sale;
            })
            .catch(function(error){
              alert(error);
            });
          } else {
            vm.sale = {};
          }

        }


      function save() {
        var saleId = $stateParams.id;

        vm.sale.customerId = vm.selectedCustomer.customerId;
        vm.sale.vehicleId = vm.selectedVehicle.vehicleId;

        if(saleId){
          salesFactory
          .update(vm.sale.saleId, vm.sale)
          .then(function() {
            SweetAlert.swal("sale Saved!", "You are on fire today!", "success");
          })
        } else {
          salesFactory
          .create(vm.sale)
          .then(function() {
            SweetAlert.swal("Sale Saved!", "Go get em tiger!", "success");
          });
        }
      }
    }

})();
