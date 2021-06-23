import { combineReducers } from "redux";

import auth from './auth';
import iD from "./iD";

export default combineReducers({
    auth,
    iD
})