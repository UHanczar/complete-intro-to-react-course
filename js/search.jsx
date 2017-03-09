const React = require('react');
const ShowCard = require('./show-card');
const data = require('../public/data');

const Search = React.createClass({

  getInitialState () {
    return {
      searchTerm: ''
    }
  },

  handleSearchTermEvent (event) {
    this.setState({
      searchTerm: event.target.value
    });
  },

  render () {
    return (
      <div className="container">
        <header className="header">
          <h1 className="brand">svideo</h1>
          <input defaultValue={this.state.searchTerm} className="search-input" type="text" placeholder="Search" onChange={this.handleSearchTermEvent} />
        </header>
        <div className="shows">
          {data.shows
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
