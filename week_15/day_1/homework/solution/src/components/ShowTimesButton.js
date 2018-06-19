import React from 'react';

const ShowTimesButton = (props) => {
  return(
    <div className='show-times'>
      <button className='btn-show-times' onClick={props.handleClick}>Get Show Times >></button>
    </div>
  );
}

export default ShowTimesButton;
