//// Selectors
export const getPosts = ({ posts }) => posts;

//// Thunks
export const loadPostsRequest = () => {
  return dispatch => {
    console.log('Request started...');
    setTimeout(() => {
      const arr = [{ id: 'a3fssdc1', title: 'Test', content: 'Lorem Ipsum' }];
      dispatch(loadPosts(arr));
      console.log('Request finished after 2sec!');
    }, 2000);
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
