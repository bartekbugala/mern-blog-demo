import React from 'react';
import { PropTypes } from 'prop-types';

import TextField from '../../common/TextField/TextField';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';

import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import '../PostForm/PostForm.scss';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    const { post } = this.props;
    this.state = {
      post: {
        title: post.title,
        author: post.author,
        content: post.content
      }
    };
  }

  componentDidMount() {
    const { resetRequest } = this.props;
    resetRequest();
  }

  handleChange = e => {
    const { post } = this.state;
    this.setState({ post: { ...post, [e.target.name]: e.target.value } });
  };
  handleEditor = text => {
    const { post } = this.state;
    this.setState({ post: { ...post, content: text /* .trim() */ } });
  };

  updatePost = e => {
    e.preventDefault();
    const { updatePost } = this.props;
    const { post } = this.state;
    if (post.content.trim().length === 0 || post.content === '<p><br></p>') {
      return;
    }
    updatePost(post);
  };

  render() {
    const { post } = this.state;
    const { handleChange, handleEditor, updatePost } = this;
    const { updateRequest } = this.props;

    if (updateRequest.error) return <Alert variant="error">{`${updateRequest.error}`}</Alert>;
    if (updateRequest.success) return <Alert variant="success">Post has been updated!</Alert>;
    else if (updateRequest.pending) return <Spinner />;
    else
      return (
        <form onSubmit={updatePost}>
          <TextField label="Title" value={post.title} onChange={handleChange} name="title" required />
          <TextField label="Author" value={post.author} onChange={handleChange} name="author" required />
          <SectionTitle>Edit post content</SectionTitle>
          <Editor
            className="content-editor"
            text={post.content}
            onChange={handleEditor}
            options={{
              placeholder: true,
              toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3'] },
              disableExtraSpaces: true,
              disableDoubleReturn: true,
              paste: {
                /* This example includes the default options for paste,
                   if nothing is passed this is what it used */
                forcePlainText: false,
                cleanPastedHTML: true,
                cleanReplacements: [],
                cleanAttrs: ['class', 'style', 'dir'],
                cleanTags: ['meta'],
                unwrapTags: []
              }
            }}
          />

          <Button variant="danger">Update post</Button>
        </form>
      );
  }
}
EditForm.propTypes = {
  request: PropTypes.object /* .isRequired */,
  updatePost: PropTypes.func /* .isRequired */
};

export default EditForm;
