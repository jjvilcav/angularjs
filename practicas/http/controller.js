angular.module("MyApp",[])
    .controller("FirstController",function($scope,$http){
        $scope.posts = [];
        $scope.newPost = {};
        //Para realizar peticiones asincrónicas: AJAX
        $http.get("https://jsonplaceholder.typicode.com/posts")
        .then(function(datos){
            $scope.posts = datos.data;
            console.log(datos.data);
         }, function(error){

           });

        $scope.addPost = function(){
            $http.post("https://jsonplaceholder.typicode.com/posts",{
                title: $scope.newPost.title,
                body: $scope.newPost.body,
            })
                .then(function(datos) {
                    $scope.posts.push($scope.newPost);
                    $scope.newPost = {};
                },function(error) {
                    
                });
        }

    });

