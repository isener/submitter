(function() {
    'use strict';

    angular.module('app.submitter')
        .controller('submitController', ['metricsLogic', 'fakeJsonService', submitController]);

    function submitController(metricsLogic, fakeJsonService) {

        var vm = this;
        vm.testIsDecrease = [];
        vm.maintainIsDecrease = [];
        vm.securityIsDecrease = [];
        vm.workmanshipIsDecrease = [];

        var groups = fakeJsonService.getGroups();
        vm.groups = groups;

        //this could be come from server. Or make interval json like realtime socket, and store it last-1 value.
        var lastTestValues = [{
            test: 63,
            maintainability: 60,
            security: 99,
            workmanship: 52
        }, {
            test: 70,
            maintainability: 76,
            security: 42,
            workmanship: 85
        }, {
            test: 42,
            maintainability: 38,
            security: 21,
            workmanship: 15
        }, {
            test: 60,
            maintainability: 50,
            security: 64,
            workmanship: 72
        }, {
            test: 60,
            maintainability: 50,
            security: 64,
            workmanship: 72
        }, {
            test: 60,
            maintainability: 50,
            security: 64,
            workmanship: 72
        }];

        for (var i = 0; i < vm.groups.length; i++) {
            vm.testIsDecrease[i] = metricsLogic.isDecrease(lastTestValues[i].test, vm.groups[i].test);
            vm.maintainIsDecrease[i] = metricsLogic.isDecrease(lastTestValues[i].maintainability, vm.groups[i].maintainability);
            vm.securityIsDecrease[i] = metricsLogic.isDecrease(lastTestValues[i].security, vm.groups[i].security);
            vm.workmanshipIsDecrease[i] = metricsLogic.isDecrease(lastTestValues[i].workmanship, vm.groups[i].workmanship);
        }



    }

})();
