/** @jsx React.DOM */

'use strict';

var React = require('react');
var Spell = require('./Spell');

var spell = {
    name: 'Eldritch Blast',
    level: 0,
    school: 'evocation',
    castingTime: '1 action',
    range: '120 feet',
    components: 'verbal, somatic',
    duration: 'instantaneous',
    description: 'A beam of crackling energy streaks towards a creature within range. Make a ranged spell attack against the target. ON a hit, the target takes 1d10 force damage.\
    The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level',
};

React.render(<Spell spell={spell} />, document.getElementById('content'))
