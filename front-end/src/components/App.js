import React, { Component } from 'react';
import '../../public/styling/App.css';

import SearchBar from './search_bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        Yo weenis time, I'm a weenie.
      </div>
    );
  }
}

export default App;
