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
    resultsPerPage: React.PropTypes.number.isRequired,
    currentPage: React.PropTypes.number.isRequired
  },
  componentDidMount:function(){
    console.log("Table - componentDidMount")
  },
  render: function() {
    return (
      <div>
        <p>{this.props.getFilteredByTag.length} results</p>
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