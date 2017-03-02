sczApp.controller('matchupController', ['$scope', '$http', function($scope, $http) {

  // IMPORT JSON

  $http.get('/js/supports.json')
    .then(function(res){
      $scope.supports = res.data;
    });

  // ORDER SORTING

  $scope.propertyName = 'difficulty';
  $scope.reverse = true;

  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };

}]);
