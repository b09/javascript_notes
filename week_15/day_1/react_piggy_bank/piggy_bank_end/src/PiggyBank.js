import React, {Component} from 'react';

class PiggyBank extends Component {

  constructor(props){
    super(props)
    this.state = {
      total: 0
    }

    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);

  }

  deposit(){
    this.setState(prevState => {
      return {total: prevState.total + this.props.depositAmount}
    })
  }

  withdraw(){
    this.setState((prevState) => {
      const newTotal = prevState.total < 1 ? 0 : prevState.total - 1;
      return {total: newTotal};
    });

    this.setState({total: 5})
  }

  render() {
    return (
      <div className="bank-box">
        <h1>{this.props.title}</h1>
        <p>I am {this.props.owner}'s {this.props.title}, I contain £{this.state.total}</p>
        <button onClick={ this.deposit }>Add</button>
        <button onClick={ this.withdraw }>Withdraw</button>

      </div>
    );
  }
}

export default PiggyBank;
