var React = require('react');
var utils = require('../../utils/utils');

var LocationsMixin = require('../../mixins/LocationsMixin');
var LocationIndex = require('../../components/locations/LocationIndex');
var Table = require('../../components/Table');

var temp_data = require('../../data');

var OfficeLocations = React.createClass({
  mixins: [LocationsMixin],
  getInitialState: function(){
    return {
      tags: [],
      headers: ['office', 'size', 'telephone', 'country'],
      results: temp_data.office
    };
  },
  render: function() {
    return (
      <div className="LocationResults OfficeLocations">
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

module.exports = OfficeLocations;