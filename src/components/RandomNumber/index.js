import React, { useState } from 'react';

const ffi = require('ffi-napi');
const path = require('path');

const randomNumber = ffi.Library(path.join(__dirname, './target/debug/librandomNumber'), {
  find: [null, ['int']]
});

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
