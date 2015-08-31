var React = require('react');
var Router = require('react-router');
var utils = require('../utils/utils');
var LocationsMixin = require('./LocationsMixin');
var LocationIndex = require('./LocationIndex');
var Table = require('./Table');

var temp_data = require('../data');

var SiteLocations = React.createClass({
  mixins: [LocationsMixin, Router.Navigation],
  getInitialState: function(){
    return {
      tags: [],
      headers: ['country', 'telephone', 'size', 'site'],
      results: temp_data.sites
    };
  },
  filterByTag: function(tag){
    this.transitionTo('site-filter', {id: tag});
  },
  render: function() {
    return (
      <div className="LocationResults SiteLocation">
        <LocationIndex tags={this.state.tags} filterByTag={this.filterByTag} />
        <Table headers={this.state.headers} results={this.state.results} sortByColumn={this.sortByColumn} />
      </div>
    );
  }
});

module.exports = SiteLocations;