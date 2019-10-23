import axios from 'axios';
import { API_URL } from '../config';

//// Selectors
export const getPosts = ({ posts }) => posts.data;
export const getSinglePost = ({ posts }) => (posts.singlePost === null ? {} : posts.singlePost);
export const countPosts = ({ posts }) => posts.data.length;
export const getRequest = ({ posts }) => posts.request;
export const getUpdateRequest = ({ posts }) => posts.updateRequest;

//// Thunks
export const loadPostsRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/posts`);
      dispatch(loadPosts(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadSinglePostRequest = id => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/posts/${id}`);
      dispatch(loadSinglePost(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const updatePostRequest = (post, id) => {
  return async dispatch => {
    dispatch(startUpdateRequest());
    try {
      await axios.patch(`${API_URL}/posts/${id}`, post);
      dispatch(endUpdateRequest());
    } catch (e) {
      dispatch(errorUpdateRequest(e.message));
    }
  };
};

export const addPostRequest = post => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      await axios.post(`${API_URL}/posts`, post);
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const deletePostRequest = id => {
  return async dispatch => {
    dispatch(startUpdateRequest());
    try {
      await axios.delete(`${API_URL}/posts/${id}`);
      dispatch(endUpdateRequest());
    } catch (e) {
      dispatch(errorUpdateRequest(e.message));
    }
  };
};

//// Initial state
const initialState = {
  data: [],
  singlePost: {},
  updateRequest: {
    pending: false,
    error: null,
    success: null
  },
  request: {
    pending: false,
    error: null,
    success: null
  }
};

//// Actions
// action name creator
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

// action exports
export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const LOAD_SINGLE_POST = createActionName('LOAD_SINGLE_POST');

export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const START_UPDATE_REQUEST = createActionName('START_UPDATE_REQUEST');
export const END_UPDATE_REQUEST = createActionName('END_UPDATE_REQUEST');
export const RESET_UPDATE_REQUEST = createActionName('RESET_UPDATE_REQUEST');
export const ERROR_UPDATE_REQUEST = createActionName('ERROR_UPDATE_REQUEST');

export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
export const loadSinglePost = payload => ({ payload, type: LOAD_SINGLE_POST });

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

export const startUpdateRequest = () => ({ type: START_UPDATE_REQUEST });
export const endUpdateRequest = () => ({ type: END_UPDATE_REQUEST });
export const resetUpdateRequest = () => ({ type: RESET_UPDATE_REQUEST });
export const errorUpdateRequest = error => ({ error, type: ERROR_UPDATE_REQUEST });

//// Reducer
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_POSTS:
      return { ...statePart, data: action.payload };
    case LOAD_SINGLE_POST:
      return { ...statePart, singlePost: action.payload };

    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: null } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case RESET_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: null } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: true } };

    case START_UPDATE_REQUEST:
      return { ...statePart, updateRequest: { pending: true, error: null, success: null } };
    case END_UPDATE_REQUEST:
      return { ...statePart, updateRequest: { pending: false, error: null, success: true } };
    case RESET_UPDATE_REQUEST:
      return { ...statePart, updateRequest: { pending: false, error: null, success: null } };
    case ERROR_UPDATE_REQUEST:
      return { ...statePart, updateRequest: { pending: false, error: action.error, success: true } };
    default:
      return statePart;
  }
}
