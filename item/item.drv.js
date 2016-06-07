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
            controller: 'VisitController as ctrl',
            link: link,
            restrict: 'A',
            scope: {
                visit: '='
            },
            templateUrl: '/item/item.html'
        };
        return directive;

        function link(scope, element, attrs, ctrl) {
            
        }
    }

    VisitController.$inject = [];
    function VisitController() {
        var ctrl = this;
    }
})();