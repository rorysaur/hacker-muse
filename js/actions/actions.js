import AppDispatcher from '../dispatcher/app_dispatcher';

var Actions = {
  createPost: function(post) {
    AppDispatcher.dispatch({
      type: 'CREATE_POST',
      data: post
    });
  }
};

export default Actions;
