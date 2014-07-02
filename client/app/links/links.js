angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
    Links.getLinks($scope.data)
      .then(function(){
        //do something
      })
      .catch(function(error){
        console.error(error);
      });
  };
});
