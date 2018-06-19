import React from 'react'
import { GuesserComponent } from '../components/GuesserComponent'
import { ChooserComponent } from '../components/ChooserComponent'
import { HistoricQuestionList } from '../components/HistoricQuestionList'
import io from 'socket.io-client';

class GameContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      celebrity: null,
      playerType: null,
      currentQuestion: {
        question: "",
        answer: ""
      },
      historicQuestions: [],
      questionCount: 0,
      currentPlayerTurn: "PLAYERTYPE_CHOOSER",
      celebrityRevealed: false
    }

    this.socket = io(`http://${window.location.hostname}:3001/`);

    this.socket.on("currentQuestion", this.recieveQuestion.bind(this))
    this.socket.on("currentAnswer", this.recieveAnswer.bind(this))
    this.socket.on("changeTurn", this.recievePlayerTurn.bind(this))
    this.socket.on("celebrity", this.recieveCelebrityReveal.bind(this))

    this.handleSubmitQuestion = this.handleSubmitQuestion.bind(this)
    this.handleCelebritySubmit = this.handleCelebritySubmit.bind(this)
    this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this)
  }

  toggleTurn() {
    const newPlayerTurn = (this.state.currentPlayerTurn === "PLAYERTYPE_CHOOSER") ? "PLAYERTYPE_GUESSER" : "PLAYERTYPE_CHOOSER"
    this.socket.emit("changeTurn", newPlayerTurn)
  }

  recieveCelebrityReveal(celebrity) {
    console.log(celebrity)
    this.setState({
      celebrity: celebrity,
      celebrityRevealed: true
    })
  }

  recievePlayerTurn(playerTurn) {
    this.setState({ currentPlayerTurn: playerTurn })
  }

  recieveQuestion(questionAnswer) {
    this.setState({
      currentQuestion: questionAnswer
    })
    this.toggleTurn()
  }

  recieveAnswer(questionAnswer) {
    let historicQuestions = this.state.historicQuestions
    historicQuestions.unshift(questionAnswer)
    this.setState({
      currentQuestion: {
        question: "",
        answer: ""
      },
      questionCount: this.state.questionCount + 1,
      historicQuestions: historicQuestions
    })
    this.toggleTurn()
  }

  revealCelebrity() {
    this.socket.emit("celebrity", this.state.celebrity)
  }

  handleCelebritySubmit(celebrity) {
    this.setState({ celebrity })
    this.toggleTurn()
  }

  selectPlayerType(playerType) {
    this.setState({ playerType })
  }

  handleSubmitQuestion(questionAnswer) {
    this.setState({ currentQuestion: questionAnswer })
    this.socket.emit('currentQuestion', questionAnswer)
  }

  handleSubmitAnswer(questionAnswer) {
    this.setState({ currentQuestion: questionAnswer })
    this.socket.emit('currentAnswer', questionAnswer)
    if(this.state.questionCount >= 20) {
      this.revealCelebrity()
    }
  }

  render() {
    let playerComponents

    switch(this.state.playerType) {
      case "PLAYERTYPE_GUESSER":
        playerComponents = (
          <GuesserComponent
          questionsRemaining={ 20 - this.state.questionCount }
          celebrity={ this.state.celebrity }
          historicQuestions={ this.state.historicQuestions }
          onQuestionSubmit={ this.handleSubmitQuestion } />
        )
      break
      case "PLAYERTYPE_CHOOSER":
        playerComponents = (
          <ChooserComponent
          questionsRemaining={ 20 - this.state.questionCount }
          celebrity={ this.state.celebrity }
          currentQuestion={ this.state.currentQuestion }
          handleCelebritySubmit={ this.handleCelebritySubmit }
          onAnswerSubmit={ this.handleSubmitAnswer } />
        )
      break
      default:
        playerComponents = (
          <div id="homeWrapper">
            <h1 className="title">20 Questions</h1>
            <h3 className="title">Choose your player</h3>
            <div id="choose-role-button-wrapper">
              <div className="choose-role-button" onClick={()=>{this.selectPlayerType("PLAYERTYPE_GUESSER")}}>
                <p>Guesser</p>
              </div>

              <div className="choose-role-button" onClick={()=>{this.selectPlayerType("PLAYERTYPE_CHOOSER")}}>
                <p>Chooser</p>
              </div>
            </div>
          </div>
        )
    }

    if (this.state.playerType && this.state.currentPlayerTurn !== this.state.playerType){
      playerComponents = (
        <div id="awaiting-player-action-wrapper">
          <h3 className="title">Awaiting player action...</h3>
        </div>
      )
    }

    if(this.state.celebrityRevealed) {
      playerComponents = (
        <div>
          <h2>The correct answer was... {this.state.celebrity}!</h2>
        </div>
      )
    }

    return (
      <div id="content">
        {playerComponents}
        <HistoricQuestionList historicQuestions={ this.state.historicQuestions } />
      </div>
    )
  }
}

export default GameContainer
