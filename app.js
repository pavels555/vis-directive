(function () {
    'use strict';

    angular.module('app', ['ngMaterial']);

    angular
        .module('app')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$scope', '$compile', '$element', '$timeout'];
    function AppCtrl($scope, $compile, $element, $timeout) {
        var ctrl = this;

        var container = document.getElementById('visualization');
        ctrl.items = new vis.DataSet();
        ctrl.groups = new vis.DataSet();

        ctrl.states = [
            {
                id: 'FL',
                name: 'Florida'
            },
            {
                id: 'CA',
                name: 'California'
            }
        ]

        ctrl.visits = [
            {
                title: 'in florida yea!',
                state: 'FL',
                notes: 'was awesome'
            },
            {
                title: 'california visit',
                state: 'CA',
                notes: 'was awesome'
            }
        ]




        var options = {};
        var timeline = new vis.Timeline(container, ctrl.items, ctrl.groups, options);


        activate();
        addGroups();
        addItems();
        ////////////////

        function activate() {

            ctrl.items.add({
                    group: ctrl.visits[0].state,
                    start: new Date(),
                    end: new Date(2016, 5, 10),
                    style: 'color: red; background-color: pink;',
                    type: 'background'
                });
        }

        function addGroups() {
            for (var i = 0; i < ctrl.states.length; i++) {
                var template = '<group state="ctrl.states[' + i + ']">' +
                    '</group>'

                var linkFn = $compile(template);

                ctrl.groups.add({
                    id: ctrl.states[i].id,
                    name: 'group' + i,
                    content: linkFn($scope)[0]
                });
            }
        }


        function addItems() {
            for (var i = 0; i < ctrl.visits.length; i++) {
                var template = '<div visit="ctrl.visits[' + i + ']"></div>';

                var linkFn = $compile(template);

                ctrl.items.add({
                    name: ctrl.visits[i].title,
                    group: ctrl.visits[i].state,
                    start: new Date(),
                    end: new Date(2016, 5, 20),
                    content: linkFn($scope)[0],
                    className: 'red',
                    type: 'range'
                });
            }
        }

        function addGroup() {
            
        }
    }
})();