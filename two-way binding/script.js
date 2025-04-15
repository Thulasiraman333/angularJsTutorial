var myApp = angular.module("myModule", ["ngRoute"]).
  controller("myController", function ($scope, $http) {

    var employee = {
      firstName: "Ben",
      lastName: "Hastings",
      gender: "Male"
    };
    $scope.employee = employee;

    $http.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => { console.log(res.data) }
      , (error) => {
        console.log(error);
      })
  });

myApp.controller("serviceContoller", function ($scope, stringService) {
  $scope.transformString = function (input) {
    $scope.output = stringService.processString(input);
  }
});

myApp.controller("anchorScrollController", function ($scope, $location, $anchorScroll) {
  $scope.scrollTo = function (scrolLoc) {
    $location.hash(scrolLoc);
    $anchorScroll.yOffset = 20;
    $anchorScroll();
  }
});


