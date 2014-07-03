angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(){
    $scope.loading = true;
    Links.addLink($scope.link)
      .then(function () {
        $scope.loading = false;
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  // $scope.submit = function(){
  //   $scope.addLink();
  //   $scope.link = {};
  // };
});
