import { connect } from 'react-redux';
import { getUpdateRequest, deletePostRequest, resetUpdateRequest } from '../../../redux/postsRedux';
import DeletePost from './DeletePost';

const mapStateToProps = state => ({
  request: getUpdateRequest(state)
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  deletePost: () => dispatch(deletePostRequest(ownProps.match.params.id)),
  resetRequest: () => dispatch(resetUpdateRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeletePost);
