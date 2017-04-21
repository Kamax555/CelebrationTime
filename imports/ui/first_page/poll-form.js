import { Meteor} from 'meteor/meteor';
import { Template} from 'meteor/templating';

import './poll-form.html';
import './search.js'

Template.pollForm.events({
    
    // using tabs next
    'click .next' : function(e){
        
     //  event.preventDefault();
    //    test= e.target.closest("div").next.id;
      //  console.log(test);
    //   $(this).removeClass('active');
       // $(this).closest('div').nextSibling.addClass('active');
    
    $('.nav-pills > .active').next('li').find('a').trigger('click');
    
    },
    //   $(e.target).next('.tab-pane').toggle(500);  },       
       
     //   $().removeClass('fade');
    //    $(this).addClass('active');
//    },
       
// using previous
    'click .previous' : function(e){
         $('.nav-pills > .active').prev('li').find('a').trigger('click');
    },
   
    
    
  // handle the form submission
  'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

    // get the data we need from the form
    var newPoll = {
      question: event.target.question.value,
      choices: [
        {  text: event.target.choice1.value +" "+ event.target.search.value +" "+ event.target.menu1.value, votes: 0 }
      ]
    };    
     
    // create the new poll
    Polls.insert(newPoll);
  }

});