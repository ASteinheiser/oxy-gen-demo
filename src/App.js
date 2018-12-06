import React from 'react';

import Fibonacci   from './components/Fibonacci';
import Spinner     from './components/Spinner';
import useLoadWasm from './modules/use-load-wasm';

const App = () => {

  const loadedWasm = useLoadWasm();

  if(!loadedWasm) return <Spinner />;

  return(
    <React.Fragment>
 
      <h1 className='app-title'>
        {'React + Rust(WASM) running in Electron!'}
      </h1>

      <h2 className='app-subheader'>
        {'Fibonacci Speed Test'}
      </h2>

      <Fibonacci />

    </React.Fragment>
  );
}

export default App;
