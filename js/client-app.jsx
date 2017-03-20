const React = require('react');
const ReactDOM = require('react-dom');
const Landing = require('./landing');
const Search = require('./search');
const Layout = require('./layout');
const Details = require('./details');
const { Router, Route, IndexRoute, hashHistory } = require('react-router');
const { shows } = require('../public/data');
const { store } = require('./store');
const { Provider } = require('react-redux');

const App = React.createClass({
  assignShow (nextState, replace) {
    const showArray = shows.filter((show) => show.imdbID === nextState.params.id);

    console.log('nextState', nextState, 'showArray', showArray);

    if (showArray.length < 1) {
      return replace('/');
    }
    Object.assign(nextState.params, showArray[0]);
    return nextState;
  },
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} shows={shows} />
            <Route path='/details/:id' component={Details} onEnter={this.assignShow} />
          </Route>
        </Router>
      </Provider>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
