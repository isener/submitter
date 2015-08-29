(function() {
    'use strict';

    angular.module('app.submitter')
        .factory('metricsLogic', metricsLogic);

    function metricsLogic() {

        var service = {
            isDecrease: isDecrease
        };
        return service;

        function isDecrease(lastVal, val) {
            if (lastVal > val) {
                return "decreasing"; //return 1 => the value is decreasing.
            } else if (lastVal == val) {
                return "equal"; // return 2 => the value is stable.
            } else if (lastVal < val) {
                return "increasing"; // return 0 => the value is increasing.
            }
        }
    }

})();
