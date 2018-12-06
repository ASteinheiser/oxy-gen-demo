import React, { useState } from 'react';

import Button        from '../Button';
import Input         from '../Input';
import fibonacciNode from '../../modules/fibonacci-node';
import timedFunction from '../../modules/timed-function';

import './fibonacci.scss';

const Fibonacci = (props) => {

  const [rust, setRust] = useState('-');
  const [node, setNode] = useState('-');
  const [number, setNumber] = useState('25');
  const valid = number >= 0;

  function handleRunTest() {
    if(valid) {
      // call the fibonacci WASM function from the window object
      const rustTime = timedFunction(() => {
        window.fibonacci(number);
      });
      setRust((rustTime / 1000).toFixed(3));
      // call the fibonacci javascript function
      const nodeTime = timedFunction(() => {
        fibonacciNode(number);
      });
      setNode((nodeTime / 1000).toFixed(3));
    }
  }

  return(
    <div className='fibonacci-container'>
      <div className='fibonacci-input'>
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

      <div className='fibonacci-result-container'>
        <div className='fibonacci-result'>
          {'Rust took:'}
          <div className='fibonacci-result-value'>
            { rust + (rust !== '-' ? 's' : '') }
          </div>
        </div>
        
        <div className='fibonacci-result'>
          {'Node.js took:'}
          <div className='fibonacci-result-value'>
            { node + (node !== '-' ? 's' : '') }
          </div>
        </div>
      </div>

    </div>
  );
}

export default Fibonacci;
