var utils = require('../utils/utils');

var LocationsMixin = {
  sortByColumn: function(index){
    var sortby = this.state.headers[index];
    var sorted_results = utils.sortBy(this.state.results, sortby);
    this.setState({results: sorted_results});
  },
  componentDidMount: function(){
    var tags = utils.lettersIndex(this.state.results);
    this.setState({tags: tags});
    this.sortByColumn(0);
  }
};

module.exports = LocationsMixin;