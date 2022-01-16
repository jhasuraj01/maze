import { createStore, combineReducers, applyMiddleware } from 'redux';
import sideNavReducer from './reducers/sideNavReducer';
import viewportReducer from './reducers/viewportReducer';
import mazeCreationAlgoChange from './reducers/mazeCreationAlgoChange';

const rootReducer = combineReducers({
    sideNav: sideNavReducer,
    screen: viewportReducer,
    mazeBuild: mazeCreationAlgoChange
})

const enhancer = typeof window === "undefined"
    ? null
    : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = enhancer ? createStore(rootReducer, enhancer) : createStore(rootReducer);

export default store