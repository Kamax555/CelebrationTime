import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import{ Restaurants } from '../../api/collections.js';
import { Accounts } from 'meteor/accounts-base';

import './search.js';
import './first_page.html';
import './restaurants/sauraha.html';
import './restaurants/grill_it_oulu.html'
import './restaurants/kauppuri_5.html'
import './restaurants/oulun_kathmandu.html'
import './restaurants/pancake_restaurant.html'
import './restaurants/ravintola_puistola.html'
import './restaurants/ravintola_uleaborg.html'
import './restaurants/sokeri_jussin_kievari.html'
import './restaurants/viking_restaurant_harald.html'
import './restaurants/restaurant_hugo.html'
import './restaurants.js'
import './poll-form.js'
import './poll-form.html'
import './poll.js'
import './poll.html'
import './send-invitation.js'
import './send-invitation.html'
import './pollTest.html'


Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

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
