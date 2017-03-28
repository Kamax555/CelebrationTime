import{ Mong } from 'meteor/mongo'; 

Restaurants = new Mongo.Collection('restaurants');

RestaurantsIndex = new EasySearch.Index({
  collection: Restaurants,
  fields: ['restaurantName', 'restaurantLocation', 'price', 'cuisine'],
  engine: new EasySearch.MongoDB()
});
