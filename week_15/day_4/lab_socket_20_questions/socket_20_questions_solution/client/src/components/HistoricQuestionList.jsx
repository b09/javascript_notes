import React from 'react'

export const HistoricQuestionList = (props) => {

  const historicQuestionNodes = props.historicQuestions.map(({ question, answer }, index) => {
    return (
    <div className="historic-question-node" key={index}>
      <p>Q: {question}</p>
      <p>A: {answer}</p>
    </div>
    )
  })

  return (
    <div id="historic-questions-wrapper">
      {historicQuestionNodes}
    </div>
  )

}
