const React = require('react');
const ReactDOM = require('react-dom');
const Landing = require('./landing');
const Search = require('./search');
const Layout = require('./layout');
const Details = require('./details');
const { Router, Route, IndexRoute, hashHistory } = require('react-router');
const { shows } = require('../public/data');

const App = React.createClass({
  assignShow (nextState, replace) {
    const showArray = shows.filter(show => show.imdbID === nextState.id);
    if (showArray.length < 1) {
      return replace('/');
    }
    Object.assign(nextState.params, showArray[0]);
    return nextState;
  },
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
          <Route path='/search' component={Search} shows={shows} />
          <Route path='/details/:id' component={Details} onEnter={this.asignShow} />
        </Route>
      </Router>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
