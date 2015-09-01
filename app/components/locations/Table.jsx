var React = require('react');

var TableHeader = require('./TableHeader');
var TableResults = require('./TableResults');
var Pagination = require('./Pagination');

var _ = require('lodash');

var Table = React.createClass({
  propTypes: {
    headers: React.PropTypes.array.isRequired,
    results: React.PropTypes.array.isRequired,
    sortByColumn: React.PropTypes.func.isRequired,
    resultsPerPage: React.PropTypes.number.isRequired,
    totalResults: React.PropTypes.number.isRequired
  },
  componentDidMount:function(){
    console.log("Table - componentDidMount")
  },
  render: function() {
    return (
      <div>
        <table>
          <TableHeader headers={this.props.headers} sortByColumn={this.props.sortByColumn} />
          <TableResults results={this.props.results} columnsOrder={this.props.headers} />
        </table>
        <Pagination 
          results={this.props.results} 
          handlePrev={this.props.handlePrev} 
          handleNext={this.props.handleNext}
          resultsPerPage={this.props.resultsPerPage}
          totalResults={this.props.totalResults} />
      </div>
    );
  }

});

module.exports = Table;