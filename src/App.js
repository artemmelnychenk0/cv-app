import React, { Component } from 'react';
import Education from './components/education';
import General from './components/general';
import Preview from './components/preview';
import Work from './components/work';

class App extends Component {
  render() {
    return (
      <div>
        <General />
        <Education />
        <Work />

      </div>
    )
  }
}

export default App;
