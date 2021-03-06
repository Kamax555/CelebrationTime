import { Meteor} from 'meteor/meteor';
import { Template} from 'meteor/templating';

import './poll.html';
import './router.js'

// attach events to our poll template
Template.poll.events({

  // event to handle clicking a choice
  'click .vote': function(event) {

    // prevent the default behavior
    event.preventDefault();

    // get the parent (poll) id
    var pollID = $(event.currentTarget).parent('.poll').data('id');
    var voteID = $(event.currentTarget).data('id');

    // create the incrementing object so we can add to the corresponding vote
    var voteString = 'choices.' + voteID + '.votes';
    var action = {};
    action[voteString] = 1;

    // increment the number of votes for this choice
    Polls.update(
      { _id: pollID },
      { $inc: action }
    );
},
'click #delete'() {
    Polls.remove(this._id);
    Router.go('/');
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

  },
'click .reserve'(){
        alert("Reservation is flying to restaurant!");
  }
});

Template.body.helpers({

    polls: function() {
    return Polls.find();
  }

});

UI.registerHelper('indexedArray', function(context, options) {
  if (context) {
    return context.map(function(item, index) {
      item._index = index;
      return item;
    });
  }
});
