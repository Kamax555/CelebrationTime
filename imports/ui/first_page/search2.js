import { Meteor} from 'meteor/meteor';
import { Template} from 'meteor/templating';

import{ Restaurants } from '../../api/collections.js';

import './search2.html';
import './restaurants.js'



Template.searchBox2.helpers({
     restaurantsIndex: () => RestaurantsIndex,

	inputAttributes: function () {
  	return { class: 'form-control', type:'text', id:'search2', name: 'search2' , placeholder: 'Search a restaurant!', required: 'required' }
  }


});

if (Meteor.isClient) {

   Template.searchBox2.events({
      'submit .searchForm': function(event, Template){
         event.preventDefault();
         var fields = event.target.searchBy.value;
         console.log(fields);


      }
   });

}
