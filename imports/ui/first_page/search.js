import { Meteor} from 'meteor/meteor';
import { Template} from 'meteor/templating';

import{ Restaurants } from '../../api/collections.js';

import './search.html';
import './restaurants.js'



Template.searchBox.helpers({
     restaurantsIndex: () => RestaurantsIndex,

	inputAttributes: function () {
  	return { class: 'form-control', type:'text', id:'search', name: 'search' , placeholder: 'Search a restaurant!', required: 'required' }
    },
 
       
 
});   

Template.searchBox.events({
    
       
     'change #search' : function(e){
   
         $('option').click(function(e){
             
           var select=$(e.target).val()
           console.log(select);
           $('#search').val(select) 
             
         })
         
     }
  
    
})
    

if (Meteor.isClient) {

   Template.searchBox.events({
      'submit .searchForm': function(event, Template){
         event.preventDefault();
         var fields = event.target.searchBy.value;
         console.log(fields);

         
      }
   });

}


