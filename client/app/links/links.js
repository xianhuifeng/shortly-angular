angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  console.log('The links service:', Links);
  $scope.data = {};
  $scope.getLinks = function () {
    Links.getLinks().then(function (resp) {
      $scope.data.links = resp;
    }).catch(function (error) {
      console.error(error);
    });
  };

  $scope.getLinks();
});
