angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function () {
    Links.addLink($scope.link.url).then(function (resp) {
      $scope.loading = false;
    }).catch(function (error) {
      console.error(error);
    });
  };
});
