import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import Game from './containers/Game'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(
  reducer,
  applyMiddleware(logger)
)

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
