(function () {
    'use strict';

    angular
        .module('app')
        .directive('state', state)
        .controller('GroupController', GroupController);

    state.$inject = [];
    function state() {

        var directive = {
            bindToController: true,
            controller: 'GroupController as ctrl',
            link: link,
            restrict: 'A',
            scope: {
                state: '='
            },
            templateUrl: '/group/group.html'
        };
        return directive;

        function link(scope, element, attrs, ctrl) {

        }
    }

    GroupController.$inject = ['$scope', '$timeout'];
    function GroupController($scope, $timeout) {
        var ctrl2 = this;

    }
})();