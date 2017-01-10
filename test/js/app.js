var app = angular.module("testApp", []);

app.controller('JsonController', function($scope, $http) {
  $http.get('js/test.json')
    .then(function(res) {
      $scope.values = res.data;
    });

  $scope.propertyName = "name";
  $scope.reverse = "true";
  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };
  $scope.hideDiff = function(difficulty) {}
})
