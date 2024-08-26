import React, {useState} from 'react';
import './stateTest.css';

export const StateTest = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div className="stateTest">
            <div className="number">{count}</div>
            <div className="actions">
                <button className="increment-btn" onClick={()=> {
                    if(count<20) {
                        setCount(count + 1)
                    }

                }}>+</button>
                <button className="decrement-btn" onClick={()=> {
                    if(count>0) {
                        setCount(count - 1)
                    }

                }}>-</button>
            </div>

            <div>
                <button className="reset-btn" onClick={()=>{setCount(0)}}>Reset</button>
            </div>

        </div>


    );
}
StateTest.prototype = {};
StateTest.defaultProps = {};