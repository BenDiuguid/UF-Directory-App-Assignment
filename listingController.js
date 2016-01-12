angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.newListing = {
      coordinates: {
        latitude: 0,
        longitude: 0
      }
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
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);
