import React from 'react';

import './button.scss';

const Button = (props) => {
  
  const { text, onClick } = props;

  return(
    <button className='button-container'
      onClick={onClick}>

      { text }

    </button>
  );
}

export default Button;
