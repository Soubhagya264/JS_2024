/* eslint-disable */
import React,{memo} from 'react';
const ChildComponent = ({ count1, fun }) => {
    console.log("Child componet");
    return (
        <div>
            <p>Child component .............. {count1}</p>
            <button onClick={fun}>click me</button>
        </div>
    );
}

export default memo(ChildComponent);
