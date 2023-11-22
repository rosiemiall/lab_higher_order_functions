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






module.exports = ScranAdvisor;