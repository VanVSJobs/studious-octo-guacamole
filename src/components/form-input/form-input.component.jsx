import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...ohterProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...ohterProps} />
    {label ? (
      <label
        className={`${ohterProps.value.length ? 'shrink' : ''}form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
