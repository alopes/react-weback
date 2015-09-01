var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var GroupLocations = require('../components/locations/GroupLocations');
var OfficeLocations = require('../components/locations/OfficeLocations');
var RegionLocations = require('../components/locations/RegionLocations');
var SiteLocations = require('../components/locations/SiteLocations');
var Locations = require('../components/Locations');

module.exports = (
 <Route name="app" path="/" handler={Locations}>
  <Route name="group" handler={GroupLocations}/>
  <Route name="site" handler={SiteLocations}/>
  <Route name="region" handler={RegionLocations}/>
  <Route name="office" handler={OfficeLocations}/>
  <DefaultRoute handler={GroupLocations} />
 </Route>
);