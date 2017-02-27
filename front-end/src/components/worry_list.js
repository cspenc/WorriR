import React, { Component } from 'react';

import WorryItem from './worry_item';

class WorryList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false
    };
  }

  onEditClick(event) {
    this.setState({ isEditing: true });
  }

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
