import React from 'react';
import './App.css';
import CreateBoard from './components/CreateBoard';
import StartGame from './components/StartGame';
import ouch from './sounds/ouch.mp3'
import background from './sounds/background.mp3'

class App extends React.Component {
  state = {
    cells: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    hole: null,
    score: 0,
    hit: false,
    timeUp: false,
    time: 20,
  }

  render() {
    return (
      <div className="App" >
        <header>
          <h1>Whack-a-mole</h1>
          <h2>score: <span className="score">{`${this.state.score}`}</span>  |  time: <span className="time">{`${this.state.time}`}  </span><span><StartGame start={this.start} /></span></h2>
        </header>
        <CreateBoard
          cells={this.state.cells}
          hole={this.state.hole}
          checkAlive={this.checkAlive}
          timeUp={this.state.timeUp} />
      </div>
    );
  }

  start = () => {
    this.setState({ score: 0, timeUp: false, time: 20 })
    this.peep();
    const music = new Audio(background);
    music.play();
    this.timer();
    setTimeout(() => {
      this.setState({ timeUp: true });
      music.pause();
    }, 20000)
  }

  timer = () => {
    setTimeout(() => {
      this.setState(currentState => {
        currentState.time -= 1;
        return currentState.time;
      })
      if (!this.state.timeUp) this.timer();
    }, 1000)
  }



  randomTime = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  }

  randomHole = (holes) => {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    if (hole === this.hole) {
      return this.randomHole(holes);
    }
    return hole;
  }

  peep = () => {
    const time = this.randomTime(300, 1000);
    const hole = this.randomHole(this.state.cells);
    this.setState({ hole })
    setTimeout(() => {
      this.setState({ hit: false })
      if (!this.state.timeUp) {
        this.peep()
      }
    }, time);
  }

  checkAlive = (e) => {
    if (e === 'mole' && !this.state.timeUp) {
      const moleOuch = new Audio(ouch);
      moleOuch.play();
      this.setState(currentState => {
        currentState.score += 1;
        return { score: currentState.score, hit: true }
      })
    }
  }
}

export default App;
