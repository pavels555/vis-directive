(function () {
    'use strict';

    angular.module('app', ['ngMaterial']);

    angular
        .module('app')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$scope', '$compile', '$element', '$timeout'];
    function AppCtrl($scope, $compile, $element, $timeout) {
        var ctrl = this;
        ctrl.addGroups = addGroups;
        ctrl.addItems = addItems;

        activate();

        ////////////////

        function activate() {
            ctrl.container = document.getElementById('visualization');
            ctrl.items = new vis.DataSet();
            ctrl.groups = new vis.DataSet();
            ctrl.options = {
                maxHeight: 500
            };

            $.getJSON("./data/states.json", function (json) {
                ctrl.states = json;
                ctrl.visits = [];

                for (var i = 0; i < 100; i++) {
                    var state = ctrl.states[Math.floor(Math.random() * ctrl.states.length)];

                    var visit = {
                        title: 'visit',
                        id: state.abbreviation,
                        state: state.name,
                        notes: 'was awesome',
                        start: randomDate(new Date(2016, 1, 1), new Date(2016, 6, 15), 0, 23),
                        end: randomDate(new Date(2016, 6, 6), new Date(2016, 12, 30), 0, 23)
                    }
                    ctrl.visits.push(visit);
                }

                addGroups();
                addItems();
            });

            ctrl.timeline = new vis.Timeline(ctrl.container, ctrl.items, ctrl.groups, ctrl.options);

            // ctrl.items.add({
            //     group: ctrl.visits[0].state,
            //     start: new Date(),
            //     end: new Date(2016, 5, 10),
            //     style: 'color: red; background-color: pink;',
            //     type: 'background'
            // });
        }

        function addGroups() {
            for (var i = 0; i < ctrl.states.length; i++) {
                var template = '<div state="ctrl.states[' + i + ']"></div>';

                var linkFn = $compile(template);

                ctrl.groups.add({
                    id: ctrl.states[i].abbreviation,
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
                    name: ctrl.visits[i].state,
                    group: ctrl.visits[i].id,
                    start: ctrl.visits[i].start,
                    end: ctrl.visits[i].end,
                    content: linkFn($scope)[0],
                    className: 'red',
                    type: 'range'
                });
            }
        }



        function randomDate(start, end, startHour, endHour) {
            var date = new Date(+start + Math.random() * (end - start));
            var hour = startHour + Math.random() * (endHour - startHour) | 0;
            date.setHours(hour);
            return date;
        }
    }
})();