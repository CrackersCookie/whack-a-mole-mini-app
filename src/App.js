import React from 'react';
import './App.css';
import CreateBoard from './components/CreateBoard';

class App extends React.Component {

  state = {
    cells: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }

  render() {
    return (
      <div className="App" >
        <header>
          <h1>Whack-a-mole <span className="score">0</span></h1>
          <button >Start!</button>
        </header>
        <CreateBoard cells={this.state.cells}/>
      </div>
    );
  }
}

export default App;
