import axios from 'axios';
import { API_URL } from '../config';

//// Selectors
export const getPosts = ({ posts }) => posts;

//// Thunks
export const loadPostsRequest = () => {
  return dispatch => {
    axios
      .get(`${API_URL}/posts`)
      .then(res => {
        dispatch(loadPosts(res.data));
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

//// Initial state
const initialState = [];

//// Actions
// action name creator
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

// action exports
export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const loadPosts = payload => ({ payload, type: LOAD_POSTS });

//// Reducer
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_POSTS:
      return [...action.payload];
    default:
      return statePart;
  }
}
