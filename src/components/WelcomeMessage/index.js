import React from 'react';

import Button from '../Button';

import './welcome-message.scss';

const WelcomeMessage = (props) => {

  const { dismiss } = props;

  return (
    <div className='welcome-message-container'>
      <div className='welcome-message-box'>
        <span className='welcome-message-title'>
          {'Welcome to OXY-GEN'}
        </span>
        <br />
        <span className='welcome-message-text'>
          {'This demo includes a recursive fibonacci algorithm written in Node.js and Rust (via Web Assembly). It runs them in parallel using web workers to showcase the difference in speed.'}
        </span>
        <br />
        <br />
        <Button
          text='Dismiss'
          onClick={dismiss} />
      </div>
    </div>
  );
}

export default WelcomeMessage;