import React from 'react'

class Comment extends React.Component {

  render() {
    return (
      <div className="comment">
        <h4 className="commentAuthor">
          { this.props.author }
        </h4>
        { this.props.children }
      </div>
    )
  }
}

export default Comment
