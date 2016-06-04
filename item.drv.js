(function () {
    'use strict';

    angular
        .module('app')
        .directive('visit', visit)
        .controller('VisitController', VisitController);

    visit.$inject = [];
    function visit() {

        var directive = {
            bindToController: true,
            controller: 'VisitController',
            controllerAs: 'ctrl',
            link: link,
            restrict: 'A',
            scope: {
                visit: '='
            },
            template: '<div>{{ctrl.visit.title}}</div>'
        };
        return directive;

        function link(scope, element, attrs) {
            
        }
    }

    VisitController.$inject = [];
    function VisitController() {

    }
})();