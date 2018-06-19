import React from 'react'

export const AnswerForm = (props) => {

  const handleAnswerClick = (event) => {
    event.preventDefault()
    const questionWithAnswer = {
      question: props.question,
      answer: event.target.value
    }
    props.onAnswerClick(questionWithAnswer)
  }

  if(!props.question) return null

  return (
    <div id="answer-form-wrapper">
      <p>Question:</p>
      <p>{props.question}</p>
      <button value="yes" onClick={ handleAnswerClick }>Yes</button>
      <button value="no" onClick={ handleAnswerClick }>No</button>
    </div>
  )

}
