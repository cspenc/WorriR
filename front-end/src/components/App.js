import React, { Component } from 'react';
import '../../public/styling/App.css';

import WorryList from './worry_list';
import CreateWorry from './create_worry';

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
        <CreateWorry createWorry={this.createWorry.bind(this)} />
        <WorryList
          worry={this.state.worry}
          // toggleWorry={this.toggleWorry.bind(this)}
         />
      </div>
    );
  }

  createWorry(worry) {
    this.state.worry.push({
      worry,
      worried: false
    });
    this.setState({ worry: this.state.worry });
  }

  // toggleWorry(worry) {
  //
  // }

}

export default App;
