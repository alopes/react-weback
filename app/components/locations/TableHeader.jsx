var React = require('react');

var TableHeader = React.createClass({
  propTypes: {
    headers: React.PropTypes.array.isRequired,
    sortByColumn: React.PropTypes.func
  },
  sortByColumn: function(index){
    this.props.sortByColumn(index);
  },
  render: function() {
    var columns = this.props.headers.map(function(row, index){
      return(
        <th onClick={ this.sortByColumn.bind(this, index) } key={index}>{row}</th>
      );
    }, this);
    return (
      <thead>
       <tr>
          {columns}
       </tr>
      </thead>
    );
  }

});

module.exports = TableHeader;