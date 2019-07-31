import React from 'react';
import './App.css';
import CreateBoard from './components/CreateBoard';
import StartGame from './components/StartGame';

class App extends React.Component {

  state = {
    cells: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    hole: null,
    score: 0,
    timeUp: false
  }

  render() {
    return (
      <div className="App" >
        <header>
          <h1>Whack-a-mole <span className="score">0</span></h1>
          <StartGame start={this.start} />
        </header>
        <CreateBoard cells={this.state.cells} hole={this.state.hole} checkAlive={this.checkAlive} />
      </div>
    );
  }

  start = () => {
    this.setState({ score: 0, timeUp: false })
    this.peep();
    setTimeout(() => this.setState({ timeUp: true }), 20000)
  }

  randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  randomHole(holes) {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    if (hole === this.hole) {
      return this.randomHole(holes);
    }
    return hole;
  }

  peep() {
    const time = this.randomTime(200, 1000);
    const hole = this.randomHole(this.state.cells);
    this.setState({ hole })
    setTimeout(() => {
      if (!this.timeUp) this.peep();
    }, time);
  }

  checkAlive(e) {
    console.log(e.target.value)
  }

}

export default App;
