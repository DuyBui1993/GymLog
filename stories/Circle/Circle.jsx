import React from 'react';
import PropTypes from 'prop-types';
import './circle.css';

/**
 * Primary UI component for user interaction
 */
export const Circle = (props) => {
  const { bgColor, label } = props;

  return (
    <div style={{ backgroundColor: bgColor }} className="circle">
      {label}
    </div>
  );
};

Circle.propTypes = {

};

Circle.defaultProps = {

};
