import React from 'react'
import { Route, Switch } from 'react-router-dom'

import UI from '../views'
import HomePage from '../views/HomePage'
import NotFound from '../views/NotFound'

import ECMAScript from '../views/ECMAScript'
import Async from '../views/Async'
import JSX from '../views/JSX'
import ReactPage from '../views/React'

import CSS from '../views/CSS'
import SCSS from '../views/SCSS'
import LESS from '../views/LESS'

/*
SPA Router
Exports a single js bundle that uses hash routes
*/
const App = () => (
  <UI>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/js/ecmascript' component={ECMAScript} />
      <Route path='/js/async' component={Async} />
      <Route path='/js/jsx' component={JSX} />
      <Route path='/js/react' component={ReactPage} />
      <Route path='/style/css' component={CSS} />
      <Route path='/style/scss' component={SCSS} />
      <Route path='/style/less' component={LESS} />
      <Route component={NotFound} />
      {/* <Redirect to="/" /> */}
    </Switch>
  </UI>
)

export default App
