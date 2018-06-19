import React from 'react'

class QuestionFrom extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      question: ""
    }

    this.questionSubmit = this.questionSubmit.bind(this);
    this.questionKeyUp = this.questionKeyUp.bind(this);
  }

  questionSubmit(event) {
    event.preventDefault()
    const questionAnswer = {
      question: this.state.question,
      answer: ""
    }
    this.setState({ question: "" })
    this.props.onFormSubmit(questionAnswer)
  }

  questionKeyUp(event) {
    this.setState({ question: event.target.value })
  }

  render() {
    return (
      <form id="choose-question-form" onSubmit={ this.questionSubmit }>
        <input
          id="choose-question-text-input"
          type="text"
          placeholder="Ask a question"
          onChange={ this.questionKeyUp }
          value={ this.state.question }
        />
        <input
          id="choose-question-submit-input"
          type="submit"
          value="Submit"
        />
      </form>
    )
  }

}

export default QuestionFrom
