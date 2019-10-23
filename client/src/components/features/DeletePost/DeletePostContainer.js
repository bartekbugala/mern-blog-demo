import { connect } from 'react-redux';
import { getRequest, deletePostRequest, resetRequest } from '../../../redux/postsRedux';
import DeletePost from './DeletePost';

const mapStateToProps = state => ({
  request: getRequest(state)
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  deletePost: () => dispatch(deletePostRequest(ownProps.match.params.id)),
  resetRequest: () => dispatch(resetRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeletePost);
