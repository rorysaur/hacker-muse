import React from 'react';
import Actions from '../actions/actions';

var SubmitForm = React.createClass({
  render: function() {
    return (
      <div>
        <h1>hi i am a submit form!</h1>
        <div class="input-url">
          <label for="url">url</label>
          <input type="text" />
        </div>
        <div class="input-title">
          <label for="title">title</label>
          <input type="text" />
        </div>
        <div class="submit">
          <button>submit</button>
        </div>
      </div>
    );
  }
});

export default SubmitForm;
