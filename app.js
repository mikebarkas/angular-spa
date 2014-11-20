var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'inc/one.html',
      controller: 'mainController'
    })
    .when('/two', {
      templateUrl: 'inc/two.html',
      controller: 'mainController'
    })
});


myApp.controller('mainController', ['$scope', '$location',
  function($scope, $location) {

  }]);
