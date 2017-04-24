import { Meteor} from 'meteor/meteor';
import { Template} from 'meteor/templating';

import './poll-form.html';
import './search.js'
import './router.js'

Template.pollForm.events({

    // using tabs next
    'click .next' : function(e){

    $('.nav-tabs > .active').next('li').find('a').trigger('click');

    },


// using previous
    'click .previous' : function(e){
         $('.nav-tabs > .active').prev('li').find('a').trigger('click');
    },



  // handle the form submission
  'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

    // get the data we need from the form
      
      
      if(event.target.choice3.value===""){
          
      var newPoll = {
          question: event.target.question.value,
          choices: [
                    {  text: event.target.choice1.value +" "+ event.target.search.value +" "+ event.target.menu1.value, votes: 0 },
                    {  text: event.target.choice2.value +" "+ event.target.search.value +" "+ event.target.menu1.value, votes: 0 }
                   ]
             }
          
          
      }else{
          
     var newPoll = {
         question: event.target.question.value,
         choices: [
                   {  text: event.target.choice1.value +" "+ event.target.search.value +" "+ event.target.menu1.value, votes: 0 },
                   {  text: event.target.choice2.value +" "+ event.target.search.value +" "+ event.target.menu1.value, votes: 0 },
                   {  text: event.target.choice3.value +" "+ event.target.search.value +" "+ event.target.menu1.value, votes: 0 }
      ]
    };
}


    // create the new poll
    Polls.insert(newPoll, function(err, results){
      var id = results;
      Router.go(`/poll/${id}`);
    });
  }

});

//datetimepicker adding
Template.pollForm.onRendered(function() {
    this.$('#datetimepicker3').datetimepicker({
       
        sideBySide: true
       
    }),

     $('#datetimepicker4').datetimepicker({
        
          sideBySide: true
    }),
     $('#datetimepicker5').datetimepicker({
        
          sideBySide: true
        
    });

});
