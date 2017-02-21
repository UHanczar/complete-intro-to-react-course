const React = require('react');
const ShowCard = require('./show-card');
const data = require('../public/data');


const Search = () => (
  <div className="container">
    <div className="shows">
      {data.shows.map((IndShow) => (
          <ShowCard {...IndShow}  key={IndShow.imdbID} /> /* show={IndShow} */
        ))}
    </div>
  </div>
);

module.exports = Search;