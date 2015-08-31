var React = require('react');

var TableHeader = require('./TableHeader');
var TableResults = require('./TableResults');

var Table = React.createClass({
  propTypes: {
    headers: React.PropTypes.array.isRequired,
    results: React.PropTypes.array.isRequired,
    sortByColumn: React.PropTypes.func.isRequired
  },
  render: function() {
    return (
      <table>
        <TableHeader headers={this.props.headers} sortByColumn={this.props.sortByColumn} />
        <TableResults results={this.props.results} columnsOrder={this.props.headers} />
      </table>
    );
  }

});

module.exports = Table;

