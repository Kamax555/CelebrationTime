import { Meteor} from 'meteor/meteor';
import { Template} from 'meteor/templating';

import './search.html';

Template.searchBox.helpers(
{
     restaurantsIndex: () => RestaurantsIndex,
});