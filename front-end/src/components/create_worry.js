import React, { Component } from 'react';

class CreateWorry extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="worry" />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default CreateWorry;
