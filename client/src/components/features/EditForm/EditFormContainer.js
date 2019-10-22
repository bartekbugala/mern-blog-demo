import { connect } from 'react-redux';
import { getRequest, updatePostRequest, resetRequest, getSinglePost } from '../../../redux/postsRedux';
import EditForm from './EditForm';

const mapStateToProps = state => ({
  request: getRequest(state),
  postGot: getSinglePost(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updatePost: post => dispatch(updatePostRequest(post, ownProps.postId)),
  resetRequest: () => dispatch(resetRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);
