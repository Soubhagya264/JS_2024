import React, { useCallback, useMemo } from 'react';
import ChildComponent from './ChildComponent';
/* eslint-disable */
const Memo = () => {
    const [count, setCount] = React.useState(0);
    const [count1, setCount1] = React.useState(0);

    const Increment1 = () => {
        setCount((prev) => prev + 1)
    }
    const Increment2 = () => {
        setCount1((prev) => prev + 1)
    }

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 500000000) i++;
        return (count % 2 === 0)
    }, [count])


    const fun = useCallback(() => {
        alert("Function called inside fun....")
    }, [count1])

    return (
        <div>
            <button onClick={Increment1}>CounterOne {count}</button>
            <span>{isEven ? "Even" : "Odd"}</span>
            <button onClick={Increment2}>CounterTwo {count1}</button>
            <ChildComponent count1={count1} fun={fun} />
        </div>
    );
}

export default Memo;
