var React = require('react');

var TableResults = React.createClass({
  propTypes: {
    columnsOrder: React.PropTypes.array.isRequired,
    results: React.PropTypes.array.isRequired
  },
  render: function() {
    var rows = this.props.results.map(function(row, index){
      return(
        <tr key={index}>
          {this.props.columnsOrder.map(function(col, index){
              return <td key={index}>{row[col]}</td>;
          })}
        </tr>
      );
    }, this);
    return (
      <tbody>
       {rows}
      </tbody>
    );
  }
});

module.exports = TableResults;