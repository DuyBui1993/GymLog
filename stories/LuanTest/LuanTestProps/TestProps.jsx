import React from 'react';
import {Rectangle} from "../../Rectangle/Rectangle";

/**
 * Primary UI component for user interaction
 */
export const TestProps = (props) => {

  return (
    <div>
      <Rectangle bgColor="blue" label="AAAA" borderRadius="20%"/>
    </div>
  );
};

TestProps.propTypes = {

};

TestProps.defaultProps = {

};
