import { combineReducers } from "redux";
import { likesReduces } from "./likesReduser";


export const rootReducer = combineReducers({
likes: likesReduces
})