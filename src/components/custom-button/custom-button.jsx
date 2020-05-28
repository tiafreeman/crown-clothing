/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import './custom-button.scss';

const CustomButton = ({ value, ...otherProps }) => {
  CustomButton.propTypes = {
    value: PropTypes.string.isRequired,
  };

  return (
    <div>
      <button className="custom-button" type="submit" {...otherProps}>
        {value}
      </button>
    </div>
  );
};

export default CustomButton;
