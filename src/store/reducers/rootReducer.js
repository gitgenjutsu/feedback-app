import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";
import studentReducer from "./studentReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    feedbackdata: studentReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});
export default rootReducer;