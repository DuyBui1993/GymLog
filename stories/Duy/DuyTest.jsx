import React from 'react';
import PropTypes from 'prop-types';
import './duyTest.css';
import '../Circle/Circle'
import {Circle} from "../Circle/Circle";

/**
 * Primary UI component for user interaction
 */
export const DuyTest = (props) => {
  const [counter, setCounter] = React.useState(0);

  return (
    <div className="counter">
      <div className="number">{counter}</div>
      <div className="actions">
        <button onClick={() => {
          setCounter(counter + 1);
        }}>+</button>
        <button onClick={() => {
          setCounter(counter - 1);
        }}>-</button>
      </div>
    </div>
  );
};

DuyTest.propTypes = {

};

DuyTest.defaultProps = {

};
