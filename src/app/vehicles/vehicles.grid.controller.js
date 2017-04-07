(function() {
    'use strict';

    angular
        .module('app.vehicles')
        .controller('VehiclesGridController', VehiclesGridController);

    VehiclesGridController.$inject = ['SweetAlert', 'VehiclesFactory'];

    /* @ngInject */
    function VehiclesGridController(SweetAlert, VehiclesFactory) {
        var vm = this;

        vm.remove = remove;

        activate();

        function activate() {
          VehiclesFactory
          .getAll()
          .then(function(data) {
            vm.vehicles = data;
            console.log(data);
          })

        }
        function remove(vehicle) {
          SweetAlert.swal({
   title: "Are you sure?",
   text: `Your will not be able to recover ${vehicle.model}'s data !`,
   type: "warning",
   showCancelButton: true,
   confirmButtonColor: "#DD6B55",confirmButtonText: "Yes",
   cancelButtonText: "Cancel",
   closeOnConfirm: false,
   closeOnCancel: false },
function(isConfirm){
   if (isConfirm) {
     VehiclesFactory.remove(vehicle.vehicleId)
     .then(function() {
      SweetAlert.swal("Deleted!", `${vehicle.model} has been deleted`, "success");
      vm.vehicles.splice(vm.vehicles.indexOf(vehicle), 1);
    });
   } else {
      SweetAlert.swal("Cancelled", `${vehicle.model} lives another day!`, "error");
   }
});
};
          };
        }

)();
