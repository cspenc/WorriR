import React, { Component } from 'react';

class WorryItem extends Component {
  render() {
    return (
      <li>
        {this.props.worry}
        <span>[edit]</span>
        <span>[delete]</span>
      </li>
    )
  }
}

export default WorryItem
