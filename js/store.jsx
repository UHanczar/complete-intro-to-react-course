const redux = require('redux');
const reactRedux = require('react-redux');

const SET_SEARCH_TERM = 'setSearchTerm';
const initialState = {
  searchTerm: ''
};

const rootReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case SET_SEARCH_TERM:
      return reduceSearchTerm(state, action);
    default:
      return state;
  }
};

const reduceSearchTerm = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {searchTerm: action.value});
  return newState;
};

const store = redux.createStore(rootReducer, initialState, redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
));

/* inserts state in react.props. Here it gonna be this.props.searchTerm */
const mapStateToProps = (state) => {
  return { searchTerm: state.searchTerm };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.setSearchTerm('house') // for example
    setSearchTerm (searchTerm) {
      dispatch({ type: SET_SEARCH_TERM, value: searchTerm });
    }
  };
};

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps);

module.exports = { connector, store, rootReducer };
