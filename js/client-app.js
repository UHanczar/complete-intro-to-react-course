var React = require('react');
var ReactDOM = require('react-dom');
var div = React.DOM.div;
var MyTitle = require('./my-title');

var MyTitleFactory = React.createFactory(MyTitle);
var crEl = React.createElement;

var MyFirstComponent = (
  div(null,
    MyTitleFactory({color: 'rebeccapurple', title: 'Props are great'}),
    React.createElement(MyTitle, {color: 'mediumaquamarine',  title: 'Use props everywhere.' }),
    crEl(MyTitle, { color: 'peru', title: 'Props are the best!' })
  )
);

ReactDOM.render(MyFirstComponent, document.getElementById('app'));