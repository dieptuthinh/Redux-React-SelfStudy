//reducer là một function siêu đơn giản, chuyển đổi từ state cũ sang state mới. tuỳ thuộc vào loại action
// root reducer là tổng hợp tất cả các reducer mà mình có trong app của mình
// mỗi reducer quản lý một phần trong state của mình
import hobbyReducer from "./hobby";
import { combineReducers } from "redux";
import userReducer from "./user";

//root reducer
const rootReducer = combineReducers({
  hobby: hobbyReducer,
  user: userReducer,
});

export default rootReducer;
