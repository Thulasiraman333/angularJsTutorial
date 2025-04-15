var myApp = angular.module("myRouteApp", ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "Templates/home.html",
        controller: "homeController"
      })
      .when("/courses", {
        templateUrl: "Templates/courses.html",
        controller: "coursesController"
      })
      .when("/students", {
        templateUrl: "Templates/students.html",
        controller: "studentsController"
      })
      .otherwise({
        redirectTo: '/home'
      })
  })
  .controller("homeController", function ($scope) {
    $scope.message = "Home Page";
  })
  .controller("coursesController", function ($scope) {
    $scope.courses = ['Angular', 'Java', 'Node.js'];
  })
  .controller("studentsController", function ($scope, $http) {
    $http.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
      $scope.students = res.data;
    }
      , (error) => {
        console.log(error);
      });
  });