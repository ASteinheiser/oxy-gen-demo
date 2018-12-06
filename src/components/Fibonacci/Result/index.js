import React from 'react';

import './result.scss';

const Result = (props) => {

  const { name, time, value } = props;

  return(
    <React.Fragment>
      <div className='fibonacci-result'>

        {`${name} made:`}

        <div className='fibonacci-result-value'>
          { time + (time !== '-' ? 's' : '') }
        </div>

      </div>

      <div className='fibonacci-result-calls'>

        { value }

        <span>
          {
            value !== '-' ?
              ' calls'
              :
              ''
          }
        </span>
      </div>
    </React.Fragment>
  );
}

export default Result;
