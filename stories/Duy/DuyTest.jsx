import React from 'react';
import PropTypes from 'prop-types';
import './duyTest.css';
import '../Circle/Circle'
import {Circle} from "../Circle/Circle";

/**
 * Primary UI component for user interaction
 */
export const DuyTest = (props) => {

  return (
    <div>
      <Circle bgColor="blue" label="AAAA" />
    </div>
  );
};

DuyTest.propTypes = {

};

DuyTest.defaultProps = {

};
