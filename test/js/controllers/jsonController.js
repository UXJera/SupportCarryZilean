App.controller('jsonController', function($scope, $http) {
  $http.get('test.json')
    .then(function(res) {
      $scope.json = res.data;
    });
})
