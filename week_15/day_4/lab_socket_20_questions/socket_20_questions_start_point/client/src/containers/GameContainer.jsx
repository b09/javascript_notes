import React from 'react'
import GuesserComponent from '../components/GuesserComponent'
import ChooserComponent from '../components/ChooserComponent'

class GameContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      playerType: null,
    }
  }

  selectPlayerType(playerType) {
    this.setState({ playerType })
  }

  render() {

    switch(this.state.playerType) {
      case "PLAYERTYPE_GUESSER":
        return (
          <GuesserComponent />
        )
      case "PLAYERTYPE_CHOOSER":
        return (
          <ChooserComponent />
        )
      default:
        return (
          <div id="homeWrapper">
            <h1 className="title">20 Questions</h1>
            <h3 className="title">Choose your player</h3>
            <button onClick={()=>{this.selectPlayerType("PLAYERTYPE_GUESSER")}}>
              Guesser
            </button>
            <button onClick={()=>{this.selectPlayerType("PLAYERTYPE_CHOOSER")}}>
              Chooser
            </button>
          </div>
        )
    }

  }
}

export default GameContainer
