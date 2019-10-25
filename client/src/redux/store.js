import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import reducers
import posts from './postsRedux';

// combine reducers
const rootReducer = combineReducers({
  posts
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
 applyMiddleware(thunk)
 ));

export default store;
