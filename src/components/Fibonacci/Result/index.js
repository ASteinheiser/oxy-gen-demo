import React from 'react';

import Spinner from '../../Spinner';

import './result.scss';

const Result = (props) => {

  const { name, time, value, loading } = props;

  let timeEstimate;
  if(time === '-') timeEstimate = '-';
  // format the time to seconds and round off long decimal
  else timeEstimate = (time / 1000).toFixed(3) + 's';

  let sumEstimate = format(value);

  function format(num) {
    const { pow, floor, abs, log } = Math;

    var base = floor(log(abs(num)) / log(1000));
    var suffix = 'KMBTQ'[base - 1];
    return suffix ? round(num / pow(1000, base), 2) + ` ${suffix}` : `${num}`;
  }

  function round(num, precision) {
    var prec = Math.pow(10, precision);
    return Math.round(num * prec) / prec;
  }

  return(
    <React.Fragment>
      <div className='fibonacci-result'>

        {`${name} made:`}

        <div className='fibonacci-result-value'>
          {
            loading ?
              <Spinner />
              :
              timeEstimate
          }
        </div>

      </div>

      <div className='fibonacci-result-calls'>
        {
          value === '-' || loading ?
            '-'
            :
            <React.Fragment>
              { sumEstimate }
              <span>
                {' recursive calls'}
              </span>
            </React.Fragment>
        }
      </div>
    </React.Fragment>
  );
}

export default Result;
