import { EventEmitter } from 'events';
import assign from 'object-assign';
import AppDispatcher from '../dispatcher/app_dispatcher';

var _posts = [
  {
    title: "A post",
    url: "with/a/link.com",
    author: "A"
  },
  {
    title: "B post",
    url: "with/b/link.com",
    author: "B"
  },
  {
    title: "C post",
    url: "with/c/link.com",
    author: "C"
  }
];

var PostStore = assign({}, EventEmitter.prototype, {
  all: function() {
    return JSON.parse(JSON.stringify(_posts));
  },

  add: function(post) {
    _posts.push(post);
  }
});

var DispatchHandler = {
  CREATE_POST: function(post) {
    PostStore.add(post);
  }
};

PostStore.dispatchToken = AppDispatcher.register(function(action) {
  if (DispatchHandler.hasOwnProperty(action.type)) {
    DispatchHandler[action.type](action.data);
    PostStore.emit('change');
  }
});

export default PostStore;
