(function() {
    'use strict';

    angular.module('app.submitter')
        .directive('percentCake', ['$interval', 'fakeJsonService', percentCake]);

    function percentCake($interval, fakeJsonService) {

        var directive = {
            restrict: "E",
            templateUrl: "./scripts/app/angular/submit/_tmp_percentcake.html",
            controller: percentController,
            controllerAs: 'vs'
        };
        return directive;

        function percentController() {
            var vs = this;

            vs.groups = fakeJsonService.getGroups();

            vs.mode = 'query';
            vs.determinateValue = 0;
            $interval(function() {
                vs.determinateValue += 1;
                if (vs.determinateValue > vs.groups[0].determinateValue) {
                    vs.determinateValue = vs.groups[0].determinateValue;
                }
            }, 30, 0, true);
        }


    }


})();
