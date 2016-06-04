(function () {
    'use strict';

    angular
        .module('app')
        .directive('group', group)
        .controller('GroupController', GroupController);

    group.$inject = [];
    function group() {

        var directive = {
            bindToController: true,
            // controller: 'GroupController',
            // controllerAs: 'ctrl2',
            link: link,
            restrict: 'E',
            scope: false,
            // scope: {
            //     state: '='
            // },
            template: '<div>{{ctrl.state.name}}</div>'
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