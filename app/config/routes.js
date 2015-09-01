var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var GroupLocations = require('../views/location/Group');
var OfficeLocations = require('../views/location/Office');
var RegionLocations = require('../views/location/Region');
var SiteLocations = require('../views/location/Site');
var Locations = require('../views/location/Locations');

module.exports = (
 <Route name="app" path="/" handler={Locations}>
  <Route name="group" handler={GroupLocations}/>
  <Route name="site" handler={SiteLocations}/>
  <Route name="region" handler={RegionLocations}/>
  <Route name="office" handler={OfficeLocations}/>
  <DefaultRoute handler={GroupLocations} />
 </Route>
);