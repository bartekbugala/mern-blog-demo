import { connect } from 'react-redux';
import { getRequest, addPostRequest, resetRequest } from '../../../redux/postsRedux';
import EditForm from './EditForm';

const mapStateToProps = state => ({
  request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPostRequest(post)),
  resetRequest: post => dispatch(resetRequest(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);
