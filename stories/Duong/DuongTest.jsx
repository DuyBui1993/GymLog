import React from 'react';
import {Square} from "../Square/Square";

/**
 * Primary UI component for user interaction
 */
// export const Square = ({ primary, backgroundColor, size, label, ...props }) => {
export const DuongTest = (props) => {
  return (
      <div>
        <Square bgColor="red" label="Square" textColor="green" borderRadius="20%" />
      </div>
  );
};

DuongTest.propTypes = {};
DuongTest.defaultProps = {};
