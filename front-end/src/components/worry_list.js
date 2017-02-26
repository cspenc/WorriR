import React, { Component } from 'react';

import WorryItem from './worry_item';

class WorryList extends Component {

  render() {
    let worries = this.props.worry.map((worry, index) => {
      return <WorryItem key={index} {...worry} />
    })
    
    return (
      <div>
        <h1>WorryList</h1>
        <ul>
          {this.worries}
        </ul>
      </div>
    )
  }
}

export default WorryList;
