const React = require('react');
const div = React.DOM.div;
const h1 = React.DOM.h1;

const MyTitle = React.createClass({
  render() {
    const colorStyle = {color: this.props.color};
    return (
      <div>
        <h1 style={ colorStyle }>
          {this.props.title}
        </h1>
      </div>
    )
  }
});

module.exports = MyTitle;