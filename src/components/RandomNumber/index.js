import React, { useState } from 'react';

import { find } from '../../rust/random_number';

import './random-number.scss';

const RandomNumber = (props) => {

  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber(find());
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
