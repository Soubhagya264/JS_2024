
const initialState = 0;
const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": return state++;
        case "DECREMENT": return state--;
        default: return state;
    }
}
export default changeTheNumber;