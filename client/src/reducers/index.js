import { combineReducers } from "redux";
import taskReducer from "./tasks";

const allReducers = combineReducers({
    task: taskReducer
})

export default allReducers;