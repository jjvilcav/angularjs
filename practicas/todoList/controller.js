angular.module("ToDoList",["LocalStorageModule"]) //LocalStorageModule es el módulo que provee la libreria adjunta en el proyecto angular-local-storage.min.js, así que hay que inyectar esa dependencia
    .controller("ToDoController",function ($scope, localStorageService) {
        $scope.todo = [];

        /*
            {
                actividad: 'Terminar el curso de AngularJS',
                fecha: '03-05-2022 10pm'
            }

        */

        $scope.addAct = function () {
            $scope.todo.push($scope.newAct);
            $scope.newAct = {};
        }
        

    });