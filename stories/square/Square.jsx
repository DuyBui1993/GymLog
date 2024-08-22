import React from 'react';
import PropTypes from 'prop-types';
import './square.css';

/**
 * Primary UI component for user interaction
 */
export const Square = ({ primary, backgroundColor, size, label, ...props }) => {
  return (
    <div className="square">
      {label}
    </div>
  );
};

Square.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Square.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
