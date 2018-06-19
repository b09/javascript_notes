import React, { Component } from 'react';
import './App.css';
import PiggyBank from './PiggyBank';

class App extends Component {
  render() {
    return (
      <PiggyBank
        title="Piggy Bank"
        owner="Alex"
        depositAmount={5}
      />
    );
  }
}

export default App;
