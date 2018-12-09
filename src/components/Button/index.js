import React from 'react';

import './button.scss';

const Button = (props) => {
  
  const { text, onClick, disabled } = props;

  function handleClick() {
    if(!disabled) {
      onClick();
    }
  }

  return(
    <button
      className={
        'button-container'
        + (disabled ? ' button-disabled' : '')
      }
      onClick={handleClick}>

      { text }

    </button>
  );
}

export default Button;
