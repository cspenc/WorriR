import React, { Component } from 'react';

class CreateWorry extends Component {

  handleCreate(event) {
    event.preventDefault();

    console.log(this.props.creatWorry);
  }

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
}

export default CreateWorry;
