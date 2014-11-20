var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'inc/one.html',
      controller: 'mainController'
    })
    .when('/two', {
      templateUrl: 'inc/two.html',
      controller: 'secondController'
    })
});


myApp.controller('mainController', ['$scope', '$log',
  function($scope, $log) {

  }]);

myApp.controller('secondController', ['$scope', '$log',
  function($scope, $log) {

  }]);
