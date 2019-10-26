import { connect } from 'react-redux';
import { getSinglePost, getRequest, loadRandomPostRequest } from '../../../redux/postsRedux';
import RandomPost from './RandomPost';

const mapStateToProps = state => ({
  post: getSinglePost(state),
  request: getRequest(state)
});
const mapDispatchToProps = dispatch => ({
  loadRandomPost: () => dispatch(loadRandomPostRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomPost);
