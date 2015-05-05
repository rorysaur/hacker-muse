var AppDispatcher = require('../dispatcher/app_dispatcher');

module.exports = {
  createPost: function(post) {
    AppDispatcher.dispatch({
      type: 'CREATE_POST',
      data: post
    });
  }
};
