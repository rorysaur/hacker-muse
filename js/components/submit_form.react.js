var React = require('react');
var Fixtures = require('../fixtures/post-data');
var Router = require('react-router');

var SubmitForm = React.createClass({
  mixins: [Router.Navigation],
  handleSubmit: function(event) {
    var url = this.refs.urlRef.getDOMNode().value.trim();
    var title = this.refs.titleRef.getDOMNode().value.trim();
    Fixtures.push({url: url, title: title});
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
          <input type="text" ref="titleRef" />
        </div>
        <div class="submit">
          <button onClick={this.handleSubmit}>submit</button>
        </div>
      </div>
    );
  }
});

module.exports = SubmitForm;

