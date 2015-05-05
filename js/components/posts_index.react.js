var React = require('react');
var PostStore = require('../stores/post_store');

var PostsIndex = React.createClass({
  componentDidMount: function() {
    PostStore.on('change', this._handlePostsChange());
  },

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
  },

  _handlePostsChange: function() {
    // do it
  }
});

module.exports = PostsIndex;
