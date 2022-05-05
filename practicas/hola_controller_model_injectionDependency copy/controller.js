angular.module("MyApp",[])
    .controller("FirstController",["$scope", "$http",function($scope,$http){
        $scope.nombre = "Joel";
        $scope.nuevoComentario = {};
        $scope.comentarios = [
            {
                comentario: "Comentario 1",
                username: "usuario1"
            },
            {
                comentario: "Comentario 2",
                username: "usuario2"
            },
            {
                comentario: "Comentario 3",
                username: "usuario3"
            }
        ];

        $scope.agregarComentario = function(){
            $scope.comentarios.push($scope.nuevoComentario);
            $scope.nuevoComentario = {};
        }

    }]);

