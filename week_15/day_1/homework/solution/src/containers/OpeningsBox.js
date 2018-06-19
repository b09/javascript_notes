import React from 'react';
import Header from '../components/Header';
import MovieTable from '../components/MovieTable';
import MoreLink from '../components/MoreLink';
import ShowTimesButton from '../components/ShowTimesButton';

class OpeningsBox extends React.Component {
  handleClick(){
    console.log("handling click");
  }

  render(){
    return(
      <div className='openings-box'>
        <Header title="UK Opening This Week"/>
        <MovieTable movies={this.props.movies}/>
        <MoreLink />
        <ShowTimesButton handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default OpeningsBox;
