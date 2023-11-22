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

ScranAdvisor.prototype.commonCuisine = function(){
    const cuisineNames = this.restaurants.map((restaurant) => {
        return restaurant.cuisines[0];
    })
    const counter = {};
    cuisineNames.forEach(cuisine =>{
        if (counter[cuisine]){
            counter[cuisine] += 1;
        } else{
            counter[cuisine] = 1;
        }
    })
    const max = Math.max.apply(null, Object.values(cuisineNames) );
    return max;
}

commonCuisine2 = function(){
    // const cuisineNames = this.restaurants.map((restaurant) => {
    //     return restaurant.cuisines[0];
    // })
    
    const cuisineNames = []; // want an array of the cuisines
   

    const counter = {};
    cuisineNames.forEach(cuisine =>{
        if (counter[cuisine]){
            counter[cuisine] += 1;
        } else{
            counter[cuisine] = 1;
        }
    })
    console.log(counter);
    const max = Math.max.apply(null, Object.values(cuisineNames) );
    return max;
}
commonCuisine2();

module.exports = ScranAdvisor;