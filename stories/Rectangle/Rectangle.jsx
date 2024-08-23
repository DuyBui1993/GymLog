import React from 'react';
import './rectangle.css';

/**
 * Primary UI component for user interaction
 */
export const Rectangle = (props) => {
    const {bgColor, label, borderRadius} = props;
    return (
        <div style={{backgroundColor: bgColor, borderRadius: borderRadius}} className="rectangle">
            {label}
        </div>
    );
};

Rectangle.propTypes = {

};

Rectangle.defaultProps = {};




















