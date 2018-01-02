// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

import React from 'react';
import ReactDOM from 'react-dom';

const counters = [
  { name: 'test 1', count: 33 },
  { name: 'test 2', count: 112 },
];

function Counter (props) {
  return <li>
    <span class="actions">{props.count}</span>
    <span class="name">{props.name}</span>
  </li>;
}

var counterItems = counters.map(counter => Counter(counter));

ReactDOM.render(
  <ul class="counters">{counterItems}</ul>,
  document.getElementById('app')
);