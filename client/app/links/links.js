angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $route, $location) {
  // Your code here
  $scope.data = {};

  $scope.activeTab = $location.path()//.current.activetab;

  $scope.getLinks = function(){
    Links.getLinks()
    .then(function(result){
      $scope.data.links = result;
    })
    .catch(function(error){
      console.error(error);
    });
  };

  $scope.getLinks();
});
