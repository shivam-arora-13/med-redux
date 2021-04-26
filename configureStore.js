import { createStore,combineReducers,applyMiddleware, compose } from 'redux';
import { DonorSpeaks} from './reducers/donorspeaks';
import UserReducer from "./reducers/userReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
           donorspeaks: DonorSpeaks,
           user : UserReducer
        }),
        composeEnhancers(applyMiddleware(thunk, logger))
    );
    return store;
}