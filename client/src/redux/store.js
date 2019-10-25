import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import reducers
import posts from './postsRedux';

// combine reducers
const rootReducer = combineReducers({
  posts
});

//create store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) || compose
  )
);

export default store;
