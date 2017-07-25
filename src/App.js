import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Route, IndexRoute, Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import store from './store';
import { Auth } from './services/Auth';
import {
  Login,
  Dashboard,
  PostsIndex,
  PostsEdit,
    CategoriesIndex,
    CategoryEdit
} from './containers/index';

require('./app.scss');

const history = syncHistoryWithStore(hashHistory, store);

let App = ({children}) => {
  return (
    <div>
      <Navbar>
        <Nav>
          <IndexLinkContainer to="/">
            <NavItem>Dashboard</NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/posts">
            <NavItem>Payments</NavItem>
          </LinkContainer>
          <LinkContainer to="/categories">
            <NavItem>Categories</NavItem>
          </LinkContainer>
        </Nav>
        {Auth.authenticated() && <Nav className="pull-right">
          <NavItem onClick={Auth.logout.bind(this)}>Logout</NavItem>
        </Nav>}
        {!Auth.authenticated() && <Nav className="pull-right">
          <LinkContainer to="/login">
            <NavItem>Login</NavItem>
          </LinkContainer>
        </Nav>}
      </Navbar>
      <div className="container">
        {children}
      </div>
    </div>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/login" component={Login} />
        <Route path="/" component={App}>
          <IndexRoute component={Dashboard} />
          <Route path="/posts" component={PostsIndex} />
          <Route path="/posts/new" component={PostsEdit} />
          <Route path="/posts/:postId" component={PostsEdit} />
          <Route path="/categories" component={CategoriesIndex} />
          <Route path="/categories/new" component={CategoryEdit} />
          <Route path="/categories/:categoryId" component={CategoryEdit} />
        </Route>
      </Router>
    </Provider>
  )
}
