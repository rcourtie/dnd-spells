/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'SpellReact',
  render: function() {
    console.log('props', this.props);
    return <div className="spell">
        <h2>{this.props.spell.name}</h2>
        <p>
            <i>{this.props.spell.school}</i>
        </p>
        <p>{this.props.spell.description}</p>
    </div>
  },
});
