import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { 
  BrowserRouter as Router, Switch,
  Route,
  Link 
} from 'react-router-dom'

import { ApolloProvider } from "react-apollo";
import { createClient } from "../util/apollo";


import Home from '../pages/Home'
import Exchange from '../pages/Exchange'
import Albus from '../pages/Albus'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

//const client = useRef(createClient());

const Root = ({ store }) => {
  const client = useRef(createClient());
  return (<ApolloProvider client={client.current}>
    <Provider store={store}>
    
    <Router>
        <Navigation />
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/albus">
            <Albus />
          </Route>
          <Route path="/exchange">
            <Exchange />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
    </Router>
  </Provider>
  </ApolloProvider>);
}
Root.propTypes = {
  store: PropTypes.object.isRequired
}
export default Root