import { useState } from "react";

const Input = (props) => {

    const [value, setValue] = useState();
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <>
            <input value={value} onChange={handleChange} />
            <br />
            {props.renderTextBelow(value)}
        </>
    );
}

export default Input;
