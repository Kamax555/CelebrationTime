import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';


import{ Restaurants } from '../../api/collections.js';



import './search.js';
import './search.html'
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
import './poll-form.js'
import './poll-form.html'


Template.sauraha.helpers({
  'sauraha': function(){
    return Restaurants.findOne({'id':'2'});
  }
});

Template.vikingRestaurantHarald.helpers({
  'viking': function(){
    return Restaurants.findOne({'id':'1'});
  }
});

Template.vikingRestaurantHarald.events({
  'click #createPolls': function(event){
    console.log(Restaurants.findOne({'id':'1'}).restaurantName)
    var x = Restaurants.findOne({'id':'1'}).restaurantName;
    x = document.getElementById("search").value;
  },

  'click #close': function(event){
    event.preventDefault();
  }
});



Template.restaurantHugo.helpers({
  'hugo': function(){
    return Restaurants.findOne({'id':'3'});
  }
});

Template.ravintolaPuistola.helpers({
  'puistola': function(){
    return Restaurants.findOne({'id':'4'});
  }
});

Template.sokeriJussinKievari.helpers({
  'sokeri': function(){
    return Restaurants.findOne({'id':'5'});
  }
});

Template.kauppuri5.helpers({
  'kauppuri': function(){
    return Restaurants.findOne({'id':'6'});
  }
});

Template.ravintolaUleaborg.helpers({
  'uleaborg': function(){
    return Restaurants.findOne({'id':'7'});
  }
});

Template.pancakeRestaurant.helpers({
  'pancake': function(){
    return Restaurants.findOne({'id':'8'});
  }
});

Template.oulunKathmandu.helpers({
  'kathmandu': function(){
    return Restaurants.findOne({'id':'9'});
  }
});

Template.grillItOulu.helpers({
  'grill': function(){
    return Restaurants.findOne({'id':'10'});
  }
});
