import React, { Component } from 'react';

class WorryItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false
    };
  }

  renderActions() {
    if (this.state.isEditing) {
      return (
        <div onClick={this.onEditClick.bind(this)}>
          These are ur editing buddons
        </div>
      )
    }
    return (
      <div>
        <span onClick={this.onEditClick.bind(this)}>[edit]</span>
        <span>[delete]</span>
      </div>
    )
  }

  onEditClick() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    return (
      <li>
        {this.props.worry}
        {this.renderActions()}
      </li>
    )
  }
}

export default WorryItem
