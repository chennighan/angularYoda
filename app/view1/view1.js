'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function ($scope, $http) {
  $scope.yodify = function() {
    console.log("sentence: " + $scope.sentence);
    var uri = "https://yoda.p.mashape.com/yoda?sentence=" + encodeURIComponent($scope.sentence);
    console.log('uri: ' + uri);
    // Simple GET request example:
    $http({
      method: 'GET',
      url: uri,
      headers:{
        //'Content-Type': 'application/json',
        'X-MASHAPE-KEY': 'HPGJYj2uYemshr2Z7VUj2OxWLOXSp1erSggjsnqkW7jlZmo86r'
      }
    }).then(function successCallback(response) {
        console.log("success: " + JSON.stringify(response));
        $scope.myData = response.data;
    }, function errorCallback(response) {
      console.log("error... " + response);
    });
  }
}]);
