import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import SinglePost from '../../features/SinglePost/SinglePostContainer';
import { FacebookProvider, Comments, Share } from 'react-facebook';
import { withRouter } from 'react-router-dom';
import { BASE_URL } from '../../../config';
import Button from '../../common/Button/Button';

const SinglePostPage = props => {
  const { location } = props;
  return (
    <div>
      <PageTitle>Single Post</PageTitle>
      <FacebookProvider appId="2422007481420819">
        <Share href={`${BASE_URL}${location.pathname}`}>
          {({ handleClick, loading }) => (
            <Button variant="primary" /* disabled="loading" */ onClick={handleClick}>
              Share
            </Button>
          )}
        </Share>

        <SinglePost postId={props.match.params.id} />

        <Comments href={`${BASE_URL}${location.pathname}`} />
      </FacebookProvider>
    </div>
  );
};

export default withRouter(props => <SinglePostPage {...props} />);
