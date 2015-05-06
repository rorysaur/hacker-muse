import React from 'react';
import Router from 'react-router';
import Actions from '../actions/actions';

var SubmitForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
      post : {
        title: "",
        url: "",
        date: new Date(),
        author: "J. Smith"
      }
    };
  },

  render: function() {
    return (
      <div>
        <h1>hi i am a submit form!</h1>
        <div className="input-url">
          <label htmlFor="url">url</label>
          <input type="text" name="url" value={this.state.post.url} onChange={this._handleChange}/>
        </div>
        <div className="input-title">
          <label htmlFor="title">title</label>
          <input type="text" name="title" value={this.state.post.title} onChange={this._handleChange}/>
        </div>
        <div className="submit">
          <button onClick={this._handleLinkSubmission}>submit</button>
        </div>
      </div>
    );
  },

  _handleLinkSubmission: function() {
    Actions.createPost(this.state.post);
    this.context.router.transitionTo('/');
  },

  _handleChange: function(event) {
    var copiedState = JSON.parse(JSON.stringify(this.state));
    copiedState.post[event.target.name] = event.target.value;
    this.setState(copiedState);
  }
});

export default SubmitForm;
