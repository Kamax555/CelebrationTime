import '../imports/api/collections.js';
import '../imports/ui/first_page/router.js';
import { Meteor } from 'meteor/meteor'

Meteor.startup(() => {
  // code to run on server at startup

  process.env.MAIL_URL = "smtp://postmaster%40sandboxd84ef69be97a43a1b152ae11e0efb22d.mailgun.org:6f5c17594e5a8d7ffee6289f72e43df4@smtp.mailgun.org:465";
});

Meteor.methods({
  sendInvitation: function(email, currentPoll, currentUser) {

   

  	//Sends the e-mail
    Email.send({
      from: "postmaster%40sandboxd84ef69be97a43a1b152ae11e0efb22d.mailgun.org",
      to: email,
      subject: "Celebration Time Invitation!",
      text: "HELLO! " + Meteor.user().username + " invited you to celebrate! Find your options here: https://celebrationtime.eu.meteorapp.com" + currentPoll
    });
  }
});
