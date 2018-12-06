import React, { useState } from 'react';

import Button        from '../Button';
import Input         from '../Input';
import Result        from './Result';
import fibonacciNode from '../../modules/fibonacci-node';
import timedFunction from '../../modules/timed-function';

import './fibonacci.scss';

const Fibonacci = (props) => {

  const [rust, setRust] = useState('-'); // stores the time
  const [rustFib, setRustFib] = useState('-'); // stores the fibonacci total number

  const [node, setNode] = useState('-'); // stores the time
  const [nodeFib, setNodeFib] = useState('-'); // stores the fibonacci total number

  const [seed, setSeed] = useState('25');

  const valid = seed >= 0;

  function handleRunTest() {
    if(valid) {
      // call the fibonacci WASM function from the window object
      const rustTime = timedFunction(() => {
        setRustFib(window.fibonacci(seed));
      });
      // format the time to seconds and round off long decimal
      setRust((rustTime / 1000).toFixed(3));
      // call the fibonacci javascript function
      const nodeTime = timedFunction(() => {
        setNodeFib(fibonacciNode(seed));
      });
      // format the time to seconds and round off long decimal
      setNode((nodeTime / 1000).toFixed(3));
    }
  }

  return(
    <div className='fibonacci-container'>
      <div className='fibonacci-input'>
        <Input
          label='Seed Number'
          type='number'
          value={seed}
          valid={valid}
          onChange={(e) => setSeed(e.target.value)} />

        <div className='fibonacci-button'>
          <Button
            text='Run Test'
            onClick={handleRunTest} />
        </div>
      </div>

      <div className='fibonacci-result-container'>

        <Result
          name='Rust'
          time={rust}
          value={rustFib} />

        <Result
          name='Node.js'
          time={node}
          value={nodeFib} />

      </div>

    </div>
  );
}

export default Fibonacci;
