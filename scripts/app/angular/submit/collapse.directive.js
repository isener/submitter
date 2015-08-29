(function() {
    'use strict';

    angular.module('app.submitter')
        .directive('customCollapse', customCollapse);

    function customCollapse() {
        var directive = {
            restrict: 'A',
            templateUrl: './scripts/app/angular/submit/_tmp_collapse.html'
        };
        return directive;
    }

})();
