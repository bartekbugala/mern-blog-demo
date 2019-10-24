import React from 'react';
import { Switch, Route } from 'react-router-dom';

// main layout
import MainLayout from './components/layout/MainLayout/MainLayout';

// routes
import Home from './components/pages/Home/HomePage';
import Posts from './components/pages/Posts/PostsPage';
import Contact from './components/pages/Contact/ContactPage';
import NotFound from './components/pages/NotFound/NotFoundPage';
import NewPost from './components/pages/NewPost/NewPostPage';
import SinglePost from './components/pages/SinglePost/SinglePostPage';
import RandomPost from './components/pages/RandomPost/RandomPostPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <MainLayout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts" exact component={Posts} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/posts/new" exact component={NewPost} />
            <Route path="/posts/:id" exact component={SinglePost} />} />
            <Route path="/posts/random" exact component={RandomPost} />} />
            <Route component={NotFound} />
          </Switch>
        </MainLayout>
      </div>
    );
  }
}

export default App;
