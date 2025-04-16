var myApp = angular.module("controller-demo", [])
  .controller("countryController", function () {
    this.name = "India";
  })
  .controller("stateController", function () {
    this.name = "Tamilnadu";
  })
  .controller("cityController", function () {
    this.name = "Villupuram";
  });