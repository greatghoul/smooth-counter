import React from 'react';

import FaClockO from 'react-icons/lib/fa/clock-o';
import FaCog from 'react-icons/lib/fa/cog';

export default class Counter extends React.Component {
  render() {
    return <li className="counter">
    <div className="counter-actions">
      <a href="#" data-action="inc">+</a>
      <a href="#" data-action="dec">-</a>
    </div>
    
    <div className="counter-heading">
      <span className="counter-count">{this.props.counter.count}</span>
      <span className="counter-name">{this.props.counter.name}</span>
    </div>
    <div className="counter-footer">
      <span className="counter-time"><FaClockO/> {this.props.counter.updatedAt}</span>
      <span className="counter-menu"><FaCog/></span>
    </div>
  </li>;
  }
}
