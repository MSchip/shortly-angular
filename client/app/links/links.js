angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
      Links.get()
      .then(function(result){
        $scope.data = result.data;
        console.log('inside the getLinks function', result);
        //do something
      })
      .catch(function(error){
        console.error(error);
      });
  };

  // $scope.getLinks();
});
