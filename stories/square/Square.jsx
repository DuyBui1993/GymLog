import React from 'react';
import './square.css';

/**
 * Primary UI component for user interaction
 */
// export const Square = ({ primary, backgroundColor, size, label, ...props }) => {
export const Square = (props) => {
  const {bgColor, label, textColor, borderRadius} = props;
  return (
    // <div className="square">
      <div style={{backgroundColor: bgColor, color: textColor, borderRadius: borderRadius}} className="square" >
        {label}
      </div>
  );
};

Square.propTypes = {};
Square.defaultProps = {};
