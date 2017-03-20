const React = require('react');
const ShowCard = require('./show-card');
/* const data = require('../public/data'); */
const Header = require('./header');
const {object} = React.PropTypes;

const Search = React.createClass({
  propTypes: {
    route: object
  },
  getInitialState () {
    return {
      searchTerm: ''
    };
  },

  handleSearchTermChange (searchTerm) {
    this.setState({
      searchTerm: searchTerm
    });
  },

  render () {
    return (
      <div className='container'>
        <Header handleSearchTermChange={this.handleSearchTermChange} searchTerm={this.state.searchTerm} showSearch />
        <div className='shows'>
          {this.props.route.shows
            .filter((IndShow) => `${IndShow.title} ${IndShow.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((IndShow) => (
              <ShowCard {...IndShow} key={IndShow.imdbID} /> /* show={ IndShow } */
          ))}
        </div>
      </div>
    );
  }
});

module.exports = Search;
