import React, { Component } from 'react';
import _ from 'lodash';

import WorryItem from './worry_item';

class WorryList extends Component {

  renderWorries() {
    return _.map(this.props.worry, (worry, index) => <WorryItem key={index} {...worry} />);
  }

  render() {
    return (
      <div>
        <h1>WorryList</h1>
        <ul>
          {this.renderWorries()}
        </ul>
      </div>
    )
  }
}

export default WorryList;
