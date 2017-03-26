import { Template } from 'meteor/templating';
import './main.html';

Template.searchBox.helpers({
  restaurantsIndex: () => RestaurantsIndex,
});
