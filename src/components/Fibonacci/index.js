import React, { useState } from 'react';

import Button from '../Button';
import Input  from '../Input';

import './fibonacci.scss';

const Fibonacci = (props) => {

  const [number, setNumber] = useState('25');
  const valid = number >= 0;

  function handleRunTest() {
    if(valid) {
      console.log(window.fibonacci(number));
    }
  }

  return(
    <div className='fibonacci-container'>

      <Input
        label='Seed Number'
        type='number'
        value={number}
        valid={valid}
        onChange={(e) => setNumber(e.target.value)} />

      <div className='fibonacci-button'>
        <Button
          text='Run Test'
          onClick={handleRunTest} />
      </div>

    </div>
  );
}

export default Fibonacci;
