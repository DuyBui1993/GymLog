import React from 'react';
import {Rectangle} from "../../Rectangle/Rectangle";

/**
 * Primary UI component for user interaction
 */
export const TestProps = (props) => {

  return (
    <div>
      <Rectangle color="red" bgColor="yellow" label="AAAA" borderRadius="20px"/>
    </div>
  );
};

TestProps.propTypes = {

};

TestProps.defaultProps = {

};
