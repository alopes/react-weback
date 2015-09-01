var _ = require('lodash');

module.exports = {
  lettersIndex: function(locations, headers){
    var letters = [];

    locations.map(function(location, i){
      // get first key value;
      location = location[headers[0]];
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
  },
  filterByTag: function(results, headers, tag){
    
    if(tag && tag.toLowerCase() !== 'all'){
      tag = tag.toLowerCase();
      var filteredResults = _.filter(results, function(result) {
        var first_column = result[headers[0]];
        var result_first_letter = first_column.substring(0,1);
        return result_first_letter.toLowerCase() === tag.toLowerCase();
      });
      return filteredResults;
    }else{
      return results;
    }
    
  }
};