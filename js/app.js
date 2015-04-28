var React = require('react');
var Router = require('react-router');
var PostsIndex = require('./components/posts_index.react.js');
var SubmitForm = require('./components/submit_form.react.js');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="submit">Submit</Link></li>
          </ul>
        </header>

        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="home" path="/" handler={App}>
    <Route name="submit" handler={SubmitForm}/>
    <DefaultRoute handler={PostsIndex}/>
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.getElementById('react'));
});
