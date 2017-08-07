import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Route, IndexRoute, Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import store from './store';
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton';

import {
  PostsIndex,
  PostsEdit,
} from './containers/index';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


require('./app.scss');

const history = syncHistoryWithStore(hashHistory, store);

let App = ({children}) => {
  return (
      <MuiThemeProvider>
    <div>
      {/*<Navbar>*/}
        {/*<Nav>*/}
          {/*<IndexLinkContainer to="/posts">*/}
            {/*<NavItem>Books</NavItem>*/}
          {/*</IndexLinkContainer>*/}
          {/*/!*<LinkContainer to="/posts">*!/*/}
            {/*/!*<NavItem>Payments</NavItem>*!/*/}
          {/*/!*</LinkContainer>*!/*/}
          {/*/!*<LinkContainer to="/categories">*!/*/}
            {/*/!*<NavItem>Categories</NavItem>*!/*/}
          {/*/!*</LinkContainer>*!/*/}
        {/*</Nav>*/}
        {/*{Auth.authenticated() && <Nav className="pull-right">*/}
          {/*<NavItem onClick={Auth.logout.bind(this)}>Logout</NavItem>*/}
        {/*</Nav>}*/}
        {/*{!Auth.authenticated() && <Nav className="pull-right">*/}
          {/*<LinkContainer to="/login">*/}
            {/*<NavItem>Login</NavItem>*/}
          {/*</LinkContainer>*/}
        {/*</Nav>}*/}
      {/*</Navbar>*/}
      <AppBar
          title={<Link to={'/posts'} style={{color:"#FFF", top:10}}>Books</Link>}


      />
      <div className="container" style ={{marginTop:20}}>
        {children}
      </div>
    </div>
      </MuiThemeProvider>

  );
}

export default () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={PostsIndex} />
          <Route path="/posts" component={PostsIndex} />
          <Route path="/posts/new" component={PostsEdit} />
          <Route path="/posts/:postId" component={PostsEdit} />
        </Route>
      </Router>
    </Provider>
  )
}
