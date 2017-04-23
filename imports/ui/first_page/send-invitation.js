import { Meteor} from 'meteor/meteor';
import { Template} from 'meteor/templating';

import './send-invitation.html';
import './router.js'


Template.invitation.events({
  "submit #sendInvitation": function(event) {
    var email = event.target.email.value;

    var pathname = window.location.pathname;
    
    //Call the sendInvitation method to send the email
    Meteor.call("sendInvitation",
                email, pathname,

                function(err, resp) {
      if (err) {
        console.log(err);
        alert("Error! " + err);
      } 
      else {
        console.log(pathname);
        alert("Invitation sent to " + email + "!");
        event.target.email.value = '';
      }
    });

    return false;
  }
  
});

