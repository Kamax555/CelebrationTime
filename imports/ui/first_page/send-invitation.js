import { Meteor} from 'meteor/meteor';
import { Template} from 'meteor/templating';

import './send-invitation.html';


Template.invitation.events({
  "submit #sendInvitation": function(event) {
    var email = event.target.email.value;
    
    //Call the sendInvitation method to send the email
    Meteor.call("sendInvitation",
                email,

                function(err, resp) {
      if (err) {
        console.log(err);
        alert("Error! " + err);
      } 
      else {
        alert("Invitation sent!");
        event.target.email.value = '';
      }
    });

    return false;
  }
  
});