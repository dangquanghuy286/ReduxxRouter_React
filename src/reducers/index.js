import { combineReducers } from "redux";
import cartReducer from "./cart";

// Kết hợp nhiều reducers thành một root reducer
const allReducers = combineReducers({
    cartReducer
    // Có thể thêm nhiều reducers khác ở đây nếu cần,

});

export default allReducers;
