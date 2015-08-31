var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var LocationIndex = React.createClass({
  propTypes: {
    tags: React.PropTypes.array.isRequired
  },
  filterByTag: function(index){
    var tag = this.props.tags[index];
    this.props.filterByTag(tag);
  },
  render: function() {
    var tags = this.props.tags.map(function(tag, index){
      return(
        <li key={index}>
          <button onClick={this.filterByTag.bind(this, index)}>{tag}</button>
        </li>
      );
    }, this);
    return (
      <div className="LocationIndex">
        <ul>
          {tags}
        </ul>
      </div>
    );
  }
});

module.exports = LocationIndex;