import React, { useState } from 'react';

import { randomNumber } from '../../rust-bindings';

import './random-number.scss';

const RandomNumber = (props) => {

  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber(randomNumber.find());
  }

  return(
    <div className='random-number-container'>
      
      <span className='random-number-text'>
        { number }
      </span>

      <button
        className='random-number-button'
        onClick={handleClick}>
        {'New Random Number'}
      </button>

    </div>
  );
}

export default RandomNumber;
