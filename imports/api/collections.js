import{ Mongo } from 'meteor/mongo';

import { Email } from 'meteor/email'

export const Restaurants = new Mongo.Collection('restaurants');

RestaurantsIndex = new EasySearch.Index({
  collection: Restaurants,
  fields: ['restaurantName', 'restaurantLocation', 'price', 'cuisine'],
  engine: new EasySearch.MongoDB()
});

Polls = new Mongo.Collection('polls');

