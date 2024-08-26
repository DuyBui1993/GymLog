import React from 'react';
import {Square} from "../Square/Square";
import PropTypes from "prop-types";
import './duongTest.css';
import "../Square/Square"

/**
 * Primary UI component for user interaction
 */
// export const Square = ({ primary, backgroundColor, size, label, ...props }) => {
export const DuongTest = (props) => {
    const [counter, setCounter] = React.useState(0);
  return (
      <div className="counter">
          <div className="number"> {counter} </div>
          <div className="action">
              <button onClick={() => {
                  if (counter < 20) {
                      setCounter(counter + 1);
                  }
              }}> + </button>
              <button onClick={() => {
                  if (counter > 0) {
                      setCounter(counter - 1);
                  }
              }}> - </button>
          </div>
          <div className="reset">
              <button onClick={() => {
                  setCounter(0);
              }}> Reset </button>
          </div>
      </div>
  );
};

DuongTest.propTypes = {};
DuongTest.defaultProps = {};
