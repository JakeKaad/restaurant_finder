restaurant.controller("RestaurantsCtrl", function RestaurantsCtrl($scope) {
  $scope.restaurants = [
    { name: "Pizza Hut", priceRange: "$", foodType: "pizza", location: "NE Portland", cssTag: "pizza" },
    { name: "Halibuts", priceRange: "$$", foodType: "Fish and Chips", location: "NE Portland", cssTag:"fish-and-chips" },
    { name: "Apizza Scholls", priceRange: "$$$", foodType: "pizza", location: "SE Portland", cssTag: "pizza" },
    { name: "The Melting Pot", priceRange: "$$$$$", foodType: "fondue", location: "Downtown Portland", cssTag: "fondue"}
  ];

  $scope.predicate = "name";

  $scope.addRestaurant = function() {

    $scope.restaurants.push({ name: $scope.name,
      priceRange: $scope.priceRange,
      foodType: $scope.foodType,
      location: $scope.location });
      $scope.name = null;
      $scope.foodType = null;
  };

  $scope.clearPriceForm = function(price) {

    if (price === false) {
      delete $scope.search.priceRange;

    }
  };

  $scope.clearLocationForm = function(location) {
    if (location === false) {
      delete $scope.search.location;
    }
  };

  $scope.clearNameForm = function(name) {
    if (name === false) {
      delete $scope.search.name;
    }
  };

  $scope.clearFoodForm = function(foodType) {
    if (foodType === false) {
      delete $scope.search.foodType;
    }
  };

// unfinished business
  // $scope.createCssTag = function() {
  //   $scope.cssTag = $scope.foodType.split(" ").join("-");
  // }


});
