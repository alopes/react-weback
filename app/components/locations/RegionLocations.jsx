var React = require('react');
var Router = require('react-router');
var utils = require('../utils/utils');
var LocationsMixin = require('./LocationsMixin');
var LocationIndex = require('./LocationIndex');
var Table = require('./Table');

var temp = require('./../data');

var RegionLocations = React.createClass({
  mixins: [LocationsMixin, Router.Navigation],
  getInitialState: function(){
    return {
      tags: [],
      active_tag: 'all',
      headers: ['region', 'size'],
      results: temp.region
    };
  },
  filterByTag: function(tag){
    this.transitionTo('region-filter', {id: tag});
    this.setState({'active_tag': tag});
  },
  results: function(){

    var tag = this.state.active_tag;
    var header = this.state.headers[0];

    var filtered_locations = _.filter(this.state.results, function(location) {
        var first_column = location[header];
        var first_tag = first_column.substring(0,1);

        if(tag === 'All'){
          return true;
        }

        return first_tag.toLowerCase() === tag.toLowerCase();
    });
    return filtered_locations;

  },
  render: function() {
    return (
      <div className="LocationResults RegionLocation">
        <LocationIndex tags={this.state.tags} filterByTag={this.filterByTag} />
        <Table headers={this.state.headers} results={this.results()} sortByColumn={this.sortByColumn} />
      </div>
    );
  }
});

module.exports = RegionLocations;