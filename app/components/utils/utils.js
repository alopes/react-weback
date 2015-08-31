var _ = require('lodash');

module.exports = {
  lettersIndex: function(locations){
    var letters = [];

    locations.map(function(location, i){
      // get first key value;
      location = location[Object.keys(location)[0]];
      letters.push(location.substring(0,1));
    });

    letters =  _.sortBy(_.uniq(letters));
    letters.unshift('All');

    return letters;
  },
  sortBy: function(results, sortby){
    var current_order = results;
    var sorted_order = _.sortBy(current_order, sortby);

    if( _.isEqual(current_order, sorted_order) ){
      sorted_order = sorted_order.reverse();
    }

    return sorted_order;
  }
};