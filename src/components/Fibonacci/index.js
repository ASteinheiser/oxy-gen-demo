import React, { useState } from 'react';

import './fibonacci.scss';

const Fibonacci = (props) => {

  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber(window.fibonacci(40));
  }

  return(
    <div className='fibonacci-container'>
      
      <span className='fibonacci-text'>
        { number }
      </span>

      <button
        className='fibonacci-button'
        onClick={handleClick}>
        {'New Random Number'}
      </button>

    </div>
  );
}

export default Fibonacci;
