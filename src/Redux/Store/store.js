import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import {RootReducer} from "./RootReducer";
import rootSaga from "./RootSaga";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
