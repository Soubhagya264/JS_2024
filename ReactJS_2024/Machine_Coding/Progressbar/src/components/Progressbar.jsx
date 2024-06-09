/*eslint-disable*/
import { MAX } from "../constant";
import { MIN } from "../constant";
import { useState } from "react";
import { useEffect } from "react";
const Progressbar = ({ value = 0, ref,onComplete = () => { } }) => {
    const [percent, setPercent] = useState(value);

    useEffect(() => {
        setPercent(Math.min(Math.max(value, MIN), MAX));

        if (value >= MAX) {
            onComplete();
        }
    }, [value]);

    

    return (
        <div className="progress">
            <span
                style={{
                    color: percent > 49 ? "white" : "black"
                }}
            >
                {percent.toFixed()}%
            </span>
            <div
                // style={{ width: `${percent}%` }}
                style={{
                    transform: `scaleX(${percent / MAX})`,
                    transformOrigin: "left"
                }}
                aria-valuemin={MIN}
                aria-valuemax={MAX}
                aria-valuenow={percent}
                role="progressbar"
            />
        </div>
    );
}

export default Progressbar
