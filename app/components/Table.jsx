var React = require('react');

var TableHeader = require('./TableHeader');
var TableResults = require('./TableResults');
var Pagination = require('./Pagination');

var Table = React.createClass({
  propTypes: {
    headers: React.PropTypes.array.isRequired,
    results: React.PropTypes.array.isRequired,
    filteredResults: React.PropTypes.array.isRequired,
    getFilteredByTag: React.PropTypes.array.isRequired,
    sortByColumn: React.PropTypes.func.isRequired,
    resultsPerPage: React.PropTypes.number,
    currentPage: React.PropTypes.number
  },
  componentDidMount:function(){
    console.log("Table - componentDidMount");
  },
  getTotalResults: function(){
    var totalResults = 0;
    if(this.props.getFilteredByTag && this.props.getFilteredByTag.length){
      totalResults = this.props.getFilteredByTag.length;
    }
    return totalResults;
  },
  render: function() {
    return (
      <div>
        <p>{this.getTotalResults()} results</p>
        <table>
          <TableHeader headers={this.props.headers} sortByColumn={this.props.sortByColumn} />
          <TableResults results={this.props.filteredResults} columnsOrder={this.props.headers} />
        </table>
        <Pagination
          handlePrev={this.props.handlePrev}
          handleNext={this.props.handleNext}
          resultsPerPage={this.props.resultsPerPage}
          currentPage={this.props.currentPage}
          getFilteredByTag={this.props.getFilteredByTag} />
      </div>
    );
  }

});

module.exports = Table;