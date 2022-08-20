import { createStore,applyMiddleware } from "redux";
import rootReducers from "./reducers/";
import logger from 'redux-logger';

const middleWare = applyMiddleware(logger)
const store = createStore(rootReducers,middleWare)

export default store;