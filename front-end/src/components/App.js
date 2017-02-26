import React, { Component } from 'react';
import '../../public/styling/App.css';

import WorryList from './worry_list'

const worry = [
  {
    worry: 'left the light on',
    worried: false
  },
  {
    worry: 'thinking about upcoming meeting',
    worried: true
  }
];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      worry
    };
  }

  render() {
    return (
      <div className="App">
        <div>~ Welcome to WorriR ~</div>
        <div>this is where the add worry will be</div>
        <WorryList worry={this.state.worry} />
      </div>
    );
  }
}

export default App;
