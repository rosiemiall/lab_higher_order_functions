const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype
ScranAdvisor.prototype.countRestaurants = function(){
    return this.restaurants.length;
}

ScranAdvisor.prototype.findByFullName = function(fullName){
    const byFullName = this.restaurants.filter((restaurant) => {
        return restaurant.name === fullName;
    });
    return byFullName[0];
}

ScranAdvisor.prototype.getAllNames = function(){
    const restaurantNames = this.restaurants.map((restaurant) => {
        return restaurant.name;
    })
    return restaurantNames;
}

ScranAdvisor.prototype.findByLocation = function(locationName){
    const restaurantsByLocation = this.restaurants.filter((restaurant) => {
        return restaurant.location.town === locationName;
    })
    return restaurantsByLocation;
}





module.exports = ScranAdvisor;