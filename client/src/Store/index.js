import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../Reducer/index";
import thunk from "redux-thunk";


const store = createStore( rootReducer, compose(applyMiddleware(thunk)));

export default store;