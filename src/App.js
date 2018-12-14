import React, { useState } from 'react';

import Fibonacci      from './components/Fibonacci';
import WelcomeMessage from './components/WelcomeMessage';

const App = () => {

  const [showMessage, setShowMessage] = useState(true);

  return(
    <React.Fragment>

      {
        showMessage ?
          <WelcomeMessage dismiss={() => setShowMessage(false)} />
          :
          null
      }
 
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
