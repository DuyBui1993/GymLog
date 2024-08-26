import React, {useState} from "react";
import './testState.css';

/**
 * Primary UI component for user interaction
 */
export const TestState = (props) => {

    const [count, setCount] = useState(0);

    const buttonIncrement = () => {
        if (count < 20) {
            setCount(count + 1);
        }
    };
    const buttonDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    const buttonReset = () => {
        setCount(0);
    };

    return (
        <div className="testState">
            <form>
                <label>
                    {count}
                </label>
                <div>
                    <button className="increment-btn" type="button" onClick={buttonIncrement}>
                        +
                    </button>
                    <button className="decrement-btn" type="button" onClick={buttonDecrement}>
                        -
                    </button>
                </div>
                <div>
                    <button className="reset-btn" type="button" onClick={buttonReset}>
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
};

TestState.propTypes = {};

TestState.defaultProps = {};
