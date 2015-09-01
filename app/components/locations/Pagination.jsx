var React = require('react');
var _ = require('lodash');

var Pagination = React.createClass({
  propTypes: {
    handleNext: React.PropTypes.func.isRequired,
    handlePrev: React.PropTypes.func.isRequired,
    getFilteredByTag: React.PropTypes.array.isRequired,
    resultsPerPage: React.PropTypes.number.isRequired,
    currentPage: React.PropTypes.number.isRequired
  },
  next: function(){
      this.props.handleNext();
  },
  prev: function(){
      this.props.handlePrev();
  },
  render: function() {
    var maxPages =  _.ceil(this.props.getFilteredByTag.length / this.props.resultsPerPage);
    if(this.props.getFilteredByTag.length > this.props.resultsPerPage){
       return (
        <div>
          <p>Page {this.props.currentPage} of { maxPages }</p>
          <ul>
            <li><button onClick={this.prev} disabled={this.props.currentPage === 1}>prev</button></li>
            <li><button onClick={this.next} disabled={this.props.currentPage >= maxPages}>next</button></li>
          </ul>
        </div>
      );
    }else{
      return(
        <div/>
      )
    }
    
  }
});

module.exports = Pagination;