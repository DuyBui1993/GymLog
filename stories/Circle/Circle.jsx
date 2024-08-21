import React from 'react';
import PropTypes from 'prop-types';
import './circle.css';

/**
 * Primary UI component for user interaction
 */
export const Circle = ({ primary, backgroundColor, size, label, ...props }) => {
  return (
    <div className="circle">
      {label}
    </div>
  );
};

Circle.propTypes = {
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

Circle.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
