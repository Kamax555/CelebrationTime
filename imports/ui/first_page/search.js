import { Meteor} from 'meteor/meteor';
import { Template} from 'meteor/templating';

import './search.html';



Template.searchBox.helpers({
     restaurantsIndex: () => RestaurantsIndex,

	inputAttributes: function () {
  	return { class: 'form-control', id:'search', name: 'search' , placeholder: 'Search a restaurant!', required: 'required' }
  }

  
});

if (Meteor.isClient) {

   Template.searchBox.events({
      'submit .searchForm': function(event, Template){
         event.preventDefault();
         var fields = event.target.searchBy.value;
         console.log(fields);

         
      }
   });

}

