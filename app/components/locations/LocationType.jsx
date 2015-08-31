var React = require('react');

var LocationType = React.createClass({
  propTypes: {
    activeLocation: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
  },
  getDefaultProps:function(){
    return {activeLocation:'site'};
  },
  handleChange:function(e){
    var newLocation = e.target.value;
    this.props.onChange(newLocation);
  },
  render: function() {
    return (
      <div>
      <select value={this.props.activeLocation} onChange={this.handleChange} >
       <option value="group">Group</option>
        <option value="site">Site</option>
        <option value="region">Region</option>
        <option value="office">Office</option>
      </select>
      </div>
    );
  }
});

module.exports = LocationType;