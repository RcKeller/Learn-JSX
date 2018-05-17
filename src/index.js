import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './flux/store'

import './styles/CSS/index.css'
import RoutedApp from './routing/SPA'

import registerServiceWorker from './util/registerServiceWorker'

const mount = document.getElementById('root')
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <RoutedApp />
    </ConnectedRouter>
  </Provider>,
  mount
)
registerServiceWorker()
