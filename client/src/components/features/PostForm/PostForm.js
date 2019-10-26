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
import './PostForm.scss';

class PostForm extends React.Component {
  state = {
    isSent: false,
    post: {
      title: '',
      author: '',
      content: ''
    }
  };
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
    this.setState({ post: { ...post, content: text.trim() } });
  };

  postAdd = e => {
    e.preventDefault();
    const { addPost } = this.props;
    const { post } = this.state;
    if (post.content.trim().length === 0 || post.content === '<p><br></p>') {
      return;
    }
    addPost(post).then(this.setState({ isSent: true }));
  };

  render() {
    const { post } = this.state;
    const isSent = this.state.isSent;
    const { handleChange, handleEditor, postAdd } = this;
    const { request } = this.props;

    if (request.error) return <Alert variant="error">{`${request.error}`}</Alert>;
    else if (request.success && isSent) return <Alert variant="success">Post has been added!</Alert>;
    else if (request.pending) return <Spinner />;
    else
      return (
        <form onSubmit={postAdd}>
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

          <Button variant="primary">Add post</Button>
        </form>
      );
  }
}
PostForm.propTypes = {
  request: PropTypes.object.isRequired,
  addPost: PropTypes.func.isRequired
};

export default PostForm;
