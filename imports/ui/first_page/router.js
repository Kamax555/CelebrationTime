Router.route('/', {
    template: 'home'
});

Router.route('/poll/:_id', {
  template: 'pollTest', 
  data: function() {

    var currentPoll = this.params._id;
    return Polls.findOne({ '_id': currentPoll });

  }

});
