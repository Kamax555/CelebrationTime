import { Meteor} from 'meteor/meteor';
import { Template} from 'meteor/templating';

import './search.html';



Template.searchBox.helpers(
{
     restaurantsIndex: () => RestaurantsIndex

});

if (Meteor.isClient) {

   Template.searchBox.events({
      'submit .searchForm': function(event, Template){
         event.preventDefault();
         var inputValue = event.target.searchBy.value;
         console.log(inputValue);

         
      }
   });

}

