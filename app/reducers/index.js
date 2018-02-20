import { combineReducers } from "redux";
import todos from "./todoReducer.js";
import filter from "./filterReducer.js";
import settings from "./settingReducer.js";

export default combineReducers({
    todos,
    filter,
    settings
});
