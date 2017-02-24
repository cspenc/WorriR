import React, { Component } from 'react';
import '../public/styling/App.css';

import SearchBar from './components/search_bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        This is the homepage.
      </div>
    );
  }
}

export default App;
