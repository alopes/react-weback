var React = require('react');
var utils = require('../utils/utils');
var LocationsMixin = require('./LocationsMixin');
var LocationIndex = require('./LocationIndex');
var Table = require('./Table');

var temp = require('./../data');

var RegionLocations = React.createClass({
  mixins: [LocationsMixin],
  getInitialState: function(){
    return {
      tags: [],
      headers: ['region', 'size'],
      results: temp.region
    };
  },
  render: function() {
    return (
      <div className="LocationResults RegionLocation">
        <LocationIndex tags={this.state.tags} filterByTag={this.filterByTag} />
        <Table headers={this.state.headers} results={this.state.results} sortByColumn={this.sortByColumn} />
      </div>
    );
  }
});

module.exports = RegionLocations;