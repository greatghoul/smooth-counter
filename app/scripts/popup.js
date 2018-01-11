// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter';

const counters = [
  { name: 'Project 1', count: 33, updatedAt: '3 days ago' },
  { name: 'Project 2', count: 112, updatedAt: 'A few seconds ago' },
];

var counterItems = counters.map(counter => <Counter key={counter.name} counter={counter} />);

ReactDOM.render(
  <ul className="counters">{counterItems}</ul>,
  document.getElementById('app')
);