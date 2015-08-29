(function() {
    'use strict';

    angular.module('app.submitter')
        .factory('fakeJsonService', fakeJsonService);

    function fakeJsonService() {
        var service = {
            getGroups: getGroups
        };
        return service;

        function getGroups() {
            var groups = [{
                id: 432423,
                title: 'Tenrox-R1_1235',
                owner: '',
                timestarted: '',
                status: 'Pending',
                metrics: '0%',
                test: 64,
                maintainability: 21,
                security: 64,
                workmanship: 21,
                build: '0%',
                unittest: '0%',
                functest: '0%',
                type: 'build',
                determinateValue: 88
            }, {
                id: 432462,
                title: '432462',
                owner: 'jtuck',
                timestarted: '4/18/2014 12:12pm',
                status: 'Running',
                metrics: '65%',
                test: 64,
                maintainability: 21,
                security: 66,
                workmanship: 21,
                build: '0%',
                unittest: '0%',
                functest: '0%',
                type: 'firewall',
                determinateValue: 54
            }, {
                id: 432461,
                title: '432461',
                owner: 'samy',
                timestarted: '4/18/2014 10:53am',
                status: 'Rejected',
                metrics: '100%',
                test: 64,
                maintainability: 21,
                security: 66,
                workmanship: 21,
                build: '100%',
                unittest: '100%',
                functest: '100%',
                type: 'firewall',
                determinateValue: 54
            }, {
                id: 432450,
                title: 'Tenrox-R1_1234',
                owner: '',
                timestarted: '4/17/2014 9:42am',
                status: 'Complete',
                metrics: '100%',
                test: 64,
                maintainability: 21,
                security: 66,
                workmanship: 21,
                build: '100%',
                unittest: '100%',
                functest: '100%',
                type: 'build',
                determinateValue: 54
            }, {
                id: 432460,
                title: '432460',
                owner: 'samy',
                timestarted: '4/17/2014 7:51am',
                status: 'Rejected',
                metrics: '100%',
                test: 64,
                maintainability: 21,
                security: 64,
                workmanship: 21,
                build: '0%',
                unittest: '0%',
                functest: '0%',
                type: 'firewall',
                determinateValue: 54
            }, {
                id: 432459,
                title: '432459',
                owner: 'samy',
                timestarted: '4/16/2014 6:43am',
                status: 'Accepted',
                metrics: '100%',
                test: 64,
                maintainability: 53,
                security: 64,
                workmanship: 72,
                build: '0%',
                unittest: '0%',
                functest: '0%',
                type: 'firewall',
                determinateValue: 54
            }];
            return groups;
        }
    }


})();
