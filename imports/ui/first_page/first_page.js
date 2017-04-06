import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';


import{ Restaurants } from '../../api/collections.js';

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


Template.sauraha.helpers({
  'restaurant': function(){
    return Restaurants.findOne({'id':'2'});
  }
});
