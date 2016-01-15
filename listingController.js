angular.module('listings').controller('ListingsController', ['$scope', 'ListingsFactory',
  function($scope, ListingsFactory) {
    $scope.listings = ListingsFactory;
    $scope.detailedInfo = undefined;
    $scope.newListing = {
      coordinates: {
        latitude: 0,
        longitude: 0
      }
    };

    $scope.test = function(message) {
      console.log(message);
    };

    var clearForm = function() {
      $scope.newListing.code = '';
      $scope.newListing.name = '';
      $scope.newListing.coordinates.latitude = 0;
      $scope.newListing.coordinates.longitude = 0;
      $scope.newListing.address = '';
    };

    clearForm();

    $scope.addListing = function() {
      var newListingToInsert = {
        name: $scope.newListing.name,
        code: $scope.newListing.code,
        address: $scope.newListing.address,
        coordinates: {
          latitude: $scope.newListing.coordinates.latitude,
          longitude: $scope.newListing.coordinates.longitude
        }
      }
      $scope.listings.push(newListingToInsert);
      clearForm();
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
      $scope.selectedIndex = -1;
      $scope.detailedInfo = {};
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
      $scope.selectedIndex = index;
    };
  }
]);
