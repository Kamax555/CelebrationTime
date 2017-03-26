Restaurants = new Mongo.Collection('restaurants');

RestaurantsIndex = new EasySearch.Index({
  collection: Restaurants,
  fields: ['restaurantName'],
  engine: new EasySearch.MongoDB()
});
