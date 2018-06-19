import React from 'react'
import QuestionForm from './QuestionForm'

export const GuesserComponent = (props) => {

  let questionsRemainingMessage = `${props.questionsRemaining} question(s) remaining!`
  if(props.questionsRemaining === 0) questionsRemainingMessage = `You are out of questions, make your final guess!`

  if(props.celebrity) {
    return (
      <div>
        <h2 id="title">Too late!</h2>
        <p>The chooser has revealed the answer to be: {props.celebrity}</p>
      </div>
    )
  }

  return (
    <div>
      <p>{questionsRemainingMessage}</p>
      <QuestionForm onFormSubmit={ props.onQuestionSubmit } />
    </div>
  )

}
