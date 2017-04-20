import '../imports/api/collections.js';


Meteor.startup(() => {
  // code to run on server at startup

  process.env.MAIL_URL = "smtp://postmaster%40sandboxd84ef69be97a43a1b152ae11e0efb22d.mailgun.org:6f5c17594e5a8d7ffee6289f72e43df4@smtp.mailgun.org:465";
});

Meteor.methods({
  sendInvitation: function(email) {
  	//Sends the e-mail
    Email.send({
      from: "postmaster%40sandboxd84ef69be97a43a1b152ae11e0efb22d.mailgun.org",
      to: email,
      subject: "Your Invitation!",
      text: "Hello! Your invitation is attached"
    });
  }
});
