import React from 'react';

import './input.scss';

const Input = (props) => {

  const { label, type, value, valid, onChange, multiline, rows } = props;

  return(
    <div className='input-container'>
      {
        multiline ?
          <textarea
            id={label}
            rows={rows || 1}
            type={type || 'text'}
            value={value}
            onChange={onChange}
            placeholder={label}
            required={true}
            className={'input-field' + (valid ? '' : ' input-field-error')} />
          :
          <input
            id={label}
            type={type || 'text'}
            value={value}
            onChange={onChange}
            placeholder={label}
            required={true}
            className={'input-field' + (valid ? '' : ' input-field-error')} />
      }

      <label className={'input-label' + (valid ? '' : ' input-label-error')}>
        { label }
      </label>

    </div>
  );
}

export default Input;
