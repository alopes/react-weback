var React = require('react');
var Router = require('react-router');
var utils = require('../utils/utils');
var LocationsMixin = require('./LocationsMixin');
var LocationIndex = require('./LocationIndex');
var Table = require('./Table');

var temp_data = require('../data');

var GroupLocation = React.createClass({
  mixins: [LocationsMixin, Router.Navigation],
  getInitialState: function(){
    return {
      tags: [],
      headers: ['region', 'size', 'leader'],
      results: temp_data.group
    };
  },
  filterByTag: function(tag){
    this.transitionTo('group-filter', {id: tag});
  },
  render: function() {
    return (
      <div className="LocationResults GroupLocation">
        <LocationIndex tags={this.state.tags} filterByTag={this.filterByTag} />
        <Table headers={this.state.headers} results={this.state.results} sortByColumn={this.sortByColumn} />
      </div>
    );
  }
});

module.exports = GroupLocation;