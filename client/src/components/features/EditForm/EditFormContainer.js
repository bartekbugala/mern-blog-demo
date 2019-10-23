import { connect } from 'react-redux';
import {
  getUpdateRequest,
  updatePostRequest,
  resetUpdateRequest /* , getSinglePost */
} from '../../../redux/postsRedux';
import EditForm from './EditForm';

const mapStateToProps = (state, ownProps) => ({
  updateRequest: getUpdateRequest(state),
  post: ownProps.post
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updatePost: post => dispatch(updatePostRequest(post, ownProps.postId)),
  resetRequest: () => dispatch(resetUpdateRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);
