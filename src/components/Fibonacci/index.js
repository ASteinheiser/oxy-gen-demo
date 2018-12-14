import React, { useState, useEffect } from 'react';

import Button     from '../Button';
import Input      from '../Input';
import Result     from './Result';
import WebWorker  from '../../modules/webWorker';
import jsWorker   from '../../modules/javascriptWorker';
import rustWorker from '../../modules/rustWorker';

import './fibonacci.scss';

const { remote } = window.require('electron');
const url        = require('url');
const path       = require('path');
// set the correct path to the rust (WASM) file
const WASM_URL = (process.env.NODE_ENV === 'development') ?
  'http://localhost:5000/rust_bg.wasm'
  :
  url.format({
    pathname: path.join(remote.app.getAppPath(), '/build/rust_bg.wasm'),
    protocol: 'file:',
    slashes: true
  });

const Fibonacci = (props) => {

  const [rustWebWorker, setRustWebWorker] = useState(null);
  const [rustTime, setRustTime] = useState('-'); // stores the time
  const [rustFib, setRustFib] = useState('-'); // stores the fibonacci total number
  const [rustLoading, setRustLoading] = useState(false);

  const [jsWebWorker, setJsWebWorker] = useState(null);
  const [nodeTime, setNodeTime] = useState('-'); // stores the time
  const [nodeFib, setNodeFib] = useState('-'); // stores the fibonacci total number
  const [nodeLoading, setNodeLoading] = useState(false);

  const [seed, setSeed] = useState('25');
  const valid = (seed >= 0) && (seed <= 45);

  useEffect(() => {
    let newRustWorker = new WebWorker(rustWorker);
    let newJsWorker = new WebWorker(jsWorker);

    newRustWorker.onmessage = (e) => {
      setRustFib(e.data.sum);
      setRustTime(e.data.time);
      setRustLoading(false);
    };

    newRustWorker.onerror = (e) => {
      setRustFib('ERROR');
      setRustTime('ERROR');
      setRustLoading(false);
    };

    newJsWorker.onmessage = (e) => {
      setNodeFib(e.data.sum);
      setNodeTime(e.data.time);
      setNodeLoading(false);
    };

    newJsWorker.onerror = (e) => {
      setNodeFib('ERROR');
      setNodeTime('ERROR');
      setNodeLoading(false);
    };

    setRustWebWorker(newRustWorker);
    setJsWebWorker(newJsWorker);
  }, []); // passing `[]` to use effect as a componentWillMount()

  function handleRunTest(e) {
    if(e && typeof e.preventDefault === 'function') e.preventDefault();

    if(valid && !rustLoading && !nodeLoading) {
      setNodeLoading(true);
      setRustLoading(true);
      jsWebWorker.postMessage(seed);
      rustWebWorker.postMessage({ seed, path: WASM_URL });
    }
  }

  return(
    <div className='fibonacci-container'>
      <form className='fibonacci-input' onSubmit={handleRunTest}>
        <Input
          label='Seed Number'
          type='number'
          value={seed}
          valid={valid}
          onChange={(e) => setSeed(e.target.value)} />

        <div className='fibonacci-button'>
          <Button
            disabled={rustLoading || nodeLoading}
            text='Run Test'
            onClick={handleRunTest} />
        </div>
      </form>

      <div className='fibonacci-result-container'>

        <Result
          name='Rust'
          loading={rustLoading}
          time={rustTime}
          value={rustFib} />

        <Result
          name='Node.js'
          loading={nodeLoading}
          time={nodeTime}
          value={nodeFib} />

      </div>

    </div>
  );
}

export default Fibonacci;
