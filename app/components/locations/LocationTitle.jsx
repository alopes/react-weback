var React = require('react');

var LocationTitle = React.createClass({
  propTypes: {
    locationName: React.PropTypes.string.isRequired
  },
  capitalize: function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  render: function() {
    var name = this.props.locationName;
    return (
      <h1>{this.capitalize(name)} Directory</h1>
    );
  }

});

module.exports = LocationTitle;