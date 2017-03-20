const React = require('react');
const ShowCard = require('./show-card');
/* const data = require('../public/data'); */
const Header = require('./header');
const {object, string} = React.PropTypes;
const { connector } = require('./store');

const Search = React.createClass({
  propTypes: {
    route: object,
    searchTerm: string
  },

  render () {
    return (
      <div className='container'>
        <Header showSearch />
        <div className='shows'>
          {this.props.route.shows
            .filter((IndShow) => `${IndShow.title} ${IndShow.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .map((IndShow) => (
              <ShowCard {...IndShow} key={IndShow.imdbID} /> /* show={ IndShow } */
          ))}
        </div>
      </div>
    );
  }
});

module.exports = connector(Search);
