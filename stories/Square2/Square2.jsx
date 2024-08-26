import React from 'react';
import PropTypes from 'prop-types';
import './square2.css';

/**
 * Primary UI component for user interaction
 */
export const Square2 = (props) => {
  const { bgColor, textColor, label, borderRadius } = props;
  return (
      <div style={{ backgroundColor: bgColor, color: textColor, borderRadius: borderRadius }} className="square2">
        {label}
      </div>
  );
};

Square2.propTypes = {
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

Square2.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
