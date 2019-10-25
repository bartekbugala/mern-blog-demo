import React from 'react';

import PageTitle from '../../common/PageTitle/PageTitle';
import PostsCounter from '../../features/PostsCounter/PostsCounterContainer';
import Posts from '../../features/Posts/PostsContainer';

const PostsPage = () => (
  <div>
    <PageTitle>Posts List</PageTitle>
    <PostsCounter />
    <Posts initialPage={1} postsPerPage={10} pagination={true} />
  </div>
);

export default PostsPage;
