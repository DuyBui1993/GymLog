import React from 'react';
import {Square} from "../Square/Square";

/**
 * Primary UI component for user interaction
 */
// export const Square = ({ primary, backgroundColor, size, label, ...props }) => {
export const DuongTest = (props) => {
  return (
      <div>
        <Square bgColor="blue" label="Square 1111" textColor="yellow" borderRadius="50%" />
      </div>
  );
};

DuongTest.propTypes = {};
DuongTest.defaultProps = {};
