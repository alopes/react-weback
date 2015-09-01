var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var LocationType = require('./locations/LocationType');
var LocationTitle = require('./locations/LocationTitle');

var Locations = React.createClass({
  mixins: [Router.State, Router.Navigation],
  getInitialState: function() {
    return {
      lolwat: "loogar"
    };
  },
  handleLocationUpdate: function(newLocation){
    this.setState({activeLocation: newLocation});
    this.transitionTo(newLocation);
  },
  componentDidMount:function(){
    if(!this.getPathname().substring(1)){
      this.transitionTo('group', null, this.props.query);
    }
  },
  getCurrentLocation: function(){
    return this.props.pathname.substring(1);
  },
  render: function() {
    return (
      <div className="locations-container">
        <ul>
          <li><Link to="group">group</Link></li>
          <li><Link to="site">site</Link></li>
          <li><Link to="region">region</Link></li>
          <li><Link to="office">office</Link></li>
        </ul>
        <LocationTitle locationName={this.getCurrentLocation()} />
        <LocationType activeLocation={this.getCurrentLocation()} onChange={this.handleLocationUpdate} />
        <RouteHandler />
      </div>
    );
  }
});

module.exports = Locations;