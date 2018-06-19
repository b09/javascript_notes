import React, {Component} from 'react'
import CommentList from '../components/CommentList'


class CommentBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [
        {id: 1, author: "Alex", text: "Cool"},
        {id: 2, author: "Pawel", text: "Brace! Brace!"}
      ]
    }
  }


  render(){
    return (
      <div className="comment-box">
        <CommentList data={this.state.data}/>
      </div>
    )
  }
}

export default CommentBox;
