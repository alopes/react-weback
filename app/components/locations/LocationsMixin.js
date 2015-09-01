var utils = require('../utils/utils');
var _ = require('lodash');
var Router = require('react-router');

var LocationsMixin = {
  mixins: [Router.State, Router.Navigation],
  getPathName: function(){
    return this.getPathname().substring(1);
  },
  getInitialState:function(){
    return {
      resultsPerPage: 10
    }
  },
  getTotalResults: function(){
    return this.state.results.length
  },
  sortByColumn: function(index){
    var sortby = this.state.headers[index];
    var sorted_results = utils.sortBy(this.state.results, sortby);
    this.setState({results: sorted_results});
  },
  componentDidMount: function(){
    console.log('componentDidMount');
    var tags = utils.lettersIndex(this.state.results, this.state.headers);
    this.setState({tags: tags});
    if(this.props.query.page){
      this.setState({currentPage: this.props.query.page}); 
    }
    this.sortByColumn(0);
  },
  filterByTag: function(tag){
    this.resetPagination();
    this.transitionTo(this.getPathName(), null, {tag: tag});
  },
  resetPagination:function(){
    this.setState({currentPage: 1});
  },
  computedResults: function(){
    var results = this.state.results;
    results = utils.filterByTag(results, this.state.headers, this.props.query.tag);
    
    var start_position = (this.currentPage() - 1)  * this.state.resultsPerPage;
    var end_position = start_position + this.state.resultsPerPage;
    results = _.slice(results, start_position, end_position);
    return results;
  },
  currentPage: function(){
    var currentPage = this.props.query.page || 1;
    return currentPage;
  },
  handlePrev: function(){

    if(this.currentPage() > 1){
      var prev_page = this.currentPage() - 1;
      var params = _.merge(this.props.query, {page: prev_page });
      this.transitionTo(this.getPathName(), null, params);
    }
    
  },
  handleNext: function(){
    
    var results = utils.filterByTag( this.state.results, this.state.headers, this.props.query.tag).length;
    var max_pages = results / this.state.resultsPerPage;
    
    if(this.currentPage() < _.ceil(max_pages) ){
      var next_page = parseInt( this.currentPage() )  + 1;
      var params = _.merge(this.props.query, {page: next_page });
      this.transitionTo(this.getPathName(), null, params);
    }

  }
};

module.exports = LocationsMixin;