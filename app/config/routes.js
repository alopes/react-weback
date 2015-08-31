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
  <Route name="group" handler={GroupLocations}>
    <Route name="group-filter" handler={GroupLocations} path="/group/:id"/>
  </Route>
  <Route name="site" handler={SiteLocations}>
    <Route name="site-filter" handler={SiteLocations} path="/site/:id"/>
  </Route>
  <Route name="region" handler={RegionLocations}>
    <Route name="region-filter" handler={RegionLocations} path="/region/:id"/>
  </Route>
  <Route name="office" handler={OfficeLocations}>
    <Route name="office-filter" handler={OfficeLocations} path="/office/:id"/>
  </Route>
  <DefaultRoute handler={GroupLocations} />
 </Route>
);