import { connect } from 'react-redux';
import { getRequest, updatePostRequest, resetRequest } from '../../../redux/postsRedux';
import EditForm from './EditForm';

const mapStateToProps = state => ({
  request: getRequest(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updatePost: post => dispatch(updatePostRequest(post, ownProps.postId)),
  resetRequest: post => dispatch(resetRequest(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);
