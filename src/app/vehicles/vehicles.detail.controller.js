(function() {
    'use strict';

    angular
        .module('app.vehicles')
        .controller('VehiclesDetailController', VehiclesDetailController);

    VehiclesDetailController.$inject = ['VehiclesFactory', 'SweetAlert', '$stateParams'];

    /* @ngInject */
    function VehiclesDetailController(VehiclesFactory, SweetAlert, $stateParams) {
        var vm = this;

        vm.save = save;

        activate();

        function save() {
          VehiclesFactory
          .update(vm.vehicle.vehicleId, vm.vehicle)
          .then(function() {
            SweetAlert.swal("Vehicle Info Saved!", "Now get on the road with that bad boy!", "success");
          })
        }

        function activate() {
          VehiclesFactory
          .getById($stateParams.id)
          .then(function(vehicle) {
            vm.vehicle = vehicle;
          })
          .catch(function(error){
          alert(error);
        })
        }
      }

})();
