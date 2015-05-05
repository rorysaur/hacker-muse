var React = require('react');
var Fixtures = require('../fixtures/post-data');

var PostsIndex = React.createClass({
  render: function() {
    return (
    <div>
      <h1>hi i am a posts index!</h1>
      <ul>
      {
        Fixtures.map(function(item) {
          return <li><a href={item.url}>{item.title}</a></li>
        })
      }
      </ul>
    </div>
    );
  }
});

module.exports = PostsIndex;
