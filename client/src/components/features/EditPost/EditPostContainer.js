import { connect } from 'react-redux';
import { getSinglePost, getRequest, loadEditPostRequest } from '../../../redux/postsRedux';
import EditPost from './EditPost';

const mapStateToProps = state => ({
  post: getSinglePost(state),
  request: getRequest(state)
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadSinglePost: () => dispatch(loadEditPostRequest(ownProps.postId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost);
