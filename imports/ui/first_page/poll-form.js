import { Meteor} from 'meteor/meteor';
import { Template} from 'meteor/templating';

import './poll-form.html';
import './search.js'

Template.pollForm.events({

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