var myApp = angular.module("myRouteApp", ["ngRoute"])
  .config(function ($routeProvider) {

    $routeProvider
      .when("/home", {
        templateUrl: "Templates/home.html",
        controller: "homeController",
        controllerAs: "homeCtrl",
        caseInsensitiveMatch: true
      })
      .when("/courses", {
        templateUrl: "Templates/courses.html",
        controller: "coursesController",
        controllerAs: "courseCtrl",
        caseInsensitiveMatch: true
      })
      .when("/students", {
        templateUrl: "Templates/students.html",
        controller: "studentsController",
        controllerAs: "studentCtrl",
        caseInsensitiveMatch: true
      })
      .when("/courses/:courseId", {
        templateUrl: "Templates/courseDetails.html",
        controller: "courseDetailsController",
        caseInsensitiveMatch: true
      })
      .otherwise({
        redirectTo: '/home'
      })
  })
  .controller("homeController", function () {
    this.message = "Home Page";
  })
  .controller("coursesController", function () {
    this.courses = [
      {
        courseName: 'Angular',
        courseId: 1,
        courseDuration: '3 months'
      },
      {
        courseName: 'Node.js',
        courseId: 2,
        courseDuration: '4 months'
      },
      {
        courseName: 'Java',
        courseId: 3,
        courseDuration: '6 months'
      }
    ];
  })
  .controller("studentsController", function ($http, $route, $rootScope, $log) {

    // next method holds only the path name when we use routeChangeStart - output - /home
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
      if (!confirm("Are you sure want to navigate away from this page to " + next.$$route.originalPath)) {
        event.preventDefault();
      }
      console.log("Inside function");
      console.log("Event", event);
      console.log("Next", next);
      console.log("Current", current);
    });

    // next method holds whole path name when we use loactionChangeStart - output -  http://127.0.0.1:5500/angularRoutes/routes.html#!/home
    // $scope.$on("$locationChangeStart", function (event, next, current) {
    //   if (!confirm("Are you sure want to navigate away from this page to " + next.$$route.originalPath)) {
    //     event.preventDefault();
    //   }
    // });

    //Angular JS Route change events - 39 tut - trigger four events when you are in that route
    var vm = this;
    $rootScope.$on("$locationChangeStart", function () {
      console.log("$locationChangeStart fired");
    });
    $rootScope.$on("$routeChangeStart", function () {
      console.log("$routeChangeStart fired");
    });
    $rootScope.$on("$locationChangeSuccess", function () {
      console.log("$locationChangeSuccess fired");
    });
    $rootScope.$on("$routeChangeSuccess", function () {
      console.log("$routeChangeSuccess fired");
    });


    vm.reloadData = () => { $route.reload() };
    $http.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
      vm.students = res.data;
    }
      , (error) => {
        console.log(error);
      });
  })
  .controller("courseDetailsController", function ($scope, $http, $routeParams) {
    console.log($routeParams.courseId);
  })
