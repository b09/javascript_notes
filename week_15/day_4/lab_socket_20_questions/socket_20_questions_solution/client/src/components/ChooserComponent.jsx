import React from 'react'
import io from 'socket.io-client'
import SetCelebrityForm from './SetCelebrityForm'
import { AnswerForm } from './AnswerForm'

export const ChooserComponent = (props) => {

  let questionsRemainingMessage = `${props.questionsRemaining} question(s) remaining!`
  if(props.questionsRemaining === 0) questionsRemainingMessage = `The guesser is out of questions, this is their final guess!`

  if (!props.celebrity) {
    return ( 
      <div>
      <h3 className="title">Choose a Celebrity</h3>
        <SetCelebrityForm onCelebrityReveal={props.revealCelebrity} handleCelebritySubmit={props.handleCelebritySubmit} />
      </div>
      )
  } else {
    return (
      <div>
        <h2 className="title">Celebrity: {props.celebrity}</h2>
        <p>{questionsRemainingMessage}</p>
        <AnswerForm question={ props.currentQuestion.question } onAnswerClick={ props.onAnswerSubmit } />
      </div>
    )
  }

}
