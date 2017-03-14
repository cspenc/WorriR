import React, { Component } from 'react';

class CreateWorry extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.handleCreate.bind(this)}>
          <input type="text" placeholder="worry" ref="worry" />
          <button>Add</button>
        </form>
      </div>
    )
  }

  handleCreate(event) {
    event.preventDefault();

    this.props.createWorry(this.refs.worry.value);
  }

}

export default CreateWorry;
