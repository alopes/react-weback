var React = require('react');

var Pagination = React.createClass({
  propTypes: {
    handleNext: React.PropTypes.func.isRequired,
    handlePrev: React.PropTypes.func.isRequired,
    results: React.PropTypes.array.isRequired,
    resultsPerPage: React.PropTypes.number.isRequired,
    totalResults: React.PropTypes.number.isRequired
  },
  next: function(){
      this.props.handleNext();
  },
  prev: function(){
      this.props.handlePrev();
  },
  render: function() {
    if(this.props.totalResults > this.props.resultsPerPage){
      return (
        <ul>
          <li><button onClick={this.prev}>prev</button></li>
          <li><button onClick={this.next}>next</button></li>
        </ul>
      );
    }else{
      return(
      <ul>
      
      </ul>
      )
    }
    
  }
});

module.exports = Pagination;