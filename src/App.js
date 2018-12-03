import React from 'react';

import RandomNumber from './components/RandomNumber';

const App = (props) => {
  return(
    <React.Fragment>
 
      <h1 className='app-title'>
        {'React + Rust App'}
      </h1>

      <RandomNumber />

    </React.Fragment>
  );
}

export default App;
