import { connect } from 'react-redux';
import { getSinglePost, getRequest, loadSinglePostRequest } from '../../../redux/postsRedux';
import SinglePost from './SinglePost';

const mapStateToProps = state => ({
  post: getSinglePost(state),
  request: getRequest(state)
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadSinglePost: () => dispatch(loadSinglePostRequest(ownProps.postId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePost);
