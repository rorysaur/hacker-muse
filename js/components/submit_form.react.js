var React = require('react');
var Actions = require('../actions/actions'); 
var Router = require('react-router');

var SubmitForm = React.createClass({
  mixins: [Router.Navigation],
  _handleLinkSubmission: function() {
    var urlRef = this.refs.urlRef.getDOMNode().value.trim();
    var titleRef = this.refs.titleRef.getDOMNode().value.trim();
    var postObj = {
      title: titleRef,
      url: urlRef,
      date: new Date(),
      author: "J. Smith"
    };
    Actions.createPost(postObj);
    this.transitionTo('/');
  },
  render: function() {
    return (
      <div>
        <h1>hi i am a submit form!</h1>
        <div class="input-url">
          <label for="url">url</label>
          <input type="text" ref="urlRef"/>
        </div>
        <div class="input-title">
          <label for="title">title</label>
          <input type="text" ref="titleRef"/>
        </div>
        <div class="submit">
          <button onClick={this._handleLinkSubmission}>submit</button>
        </div>
      </div>
    );
  }
});

module.exports = SubmitForm;

