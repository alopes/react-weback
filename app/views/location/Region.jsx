var React = require('react');
var utils = require('../../utils/utils');

var LocationsMixin = require('../../mixins/LocationsMixin');
var LocationIndex = require('../../components/locations/LocationIndex');
var Table = require('../../components/Table');

var temp_data = require('../../data');

var RegionLocations = React.createClass({
  mixins: [LocationsMixin],
  getInitialState: function(){
    return {
      tags: [],
      active_tag: 'all',
      headers: ['region', 'size'],
      results: temp_data.region
    };
  },
  render: function() {
    return (
      <div className="LocationResults RegionLocation">
        <LocationIndex tags={this.state.tags} filterByTag={this.filterByTag} />
        <Table 
          headers={this.state.headers}
          results={this.state.results}
          filteredResults={this.computedResults()}
          sortByColumn={this.sortByColumn}
          handlePrev={this.handlePrev}
          handleNext={this.handleNext}
          resultsPerPage={this.state.resultsPerPage}
          totalResults={this.getTotalResults()}
          currentPage={this.getCurrentPage()}
          getFilteredByTag={this.getFilteredByTag()}
          />
      </div>
    );
  }
});

module.exports = RegionLocations;