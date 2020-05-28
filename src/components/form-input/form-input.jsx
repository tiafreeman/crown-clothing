/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import './form-input.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  FormInput.propTypes = {
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string,
  };

  FormInput.defaultProps = {
    label: null,
  };

  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          htmlFor="form-input"
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : (
        <input
          className="form-input"
          onChange={handleChange}
          {...otherProps}
        />
      )}
    </div>
  );
};

export default FormInput;
