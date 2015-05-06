import React from 'react';
import PostStore from '../stores/post_store';

var PostsIndex = React.createClass({
  getInitialState: function() {
    return {
      posts: PostStore.all()
    };
  },

  render: function() {
    return (
    <div>
      <h1>hi i am a posts index!</h1>
      <ul>
      {
        this.state.posts.map(function(item) {
          return <li><a href={item.url}>{item.title}</a></li>
        })
      }
      </ul>
    </div>
    );
  }
});

export default PostsIndex;
