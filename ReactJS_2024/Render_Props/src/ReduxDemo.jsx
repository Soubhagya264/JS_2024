

const ReduxDemo = () => {
    return (
        <div>
            <h1>Increment/Decrement Counter</h1>
            <h4>Using React/Redux</h4>
            <div className="quantity_minus" title="Decrement">
                <button>-</button>
            </div>
            <input name="quantity" type="text" className="quantity_input" value="0" />
            <div className="quantity_plu" title="Increment">
                <button>+</button>
            </div>
        </div>
    );
}

export default ReduxDemo;
