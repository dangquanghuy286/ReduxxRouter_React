const cartReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [
                ...state,
                {
                    id: action.id,
                    info: action.info,
                    quantity: 1
                }
            ];
        default:
            return state;
    }


}
export default cartReducer;