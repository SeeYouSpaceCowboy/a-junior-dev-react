import React from 'react'
import { IndexRoute, Route, browserHistory } from 'react-router'
import App from './App'
import SearchPage from './components/SearchPage'
import AboutPage from './components/AboutPage'

export default (
  <Route path='/' component={ App }>
    <IndexRoute component={ SearchPage }/>
    <Route path='/about' component={ AboutPage } />
  </Route>
)

function requireAuth(nextState, replace) {
  if (!sessionStorage.jwt) replace({ pathname: '/' })
}

function redirectToHomeIfLoggedIn() {
  if(!!sessionStorage.jwt) browserHistory.push('/')
}
