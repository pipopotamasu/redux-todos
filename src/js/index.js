import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import { addTodo, toggleTodo, setVisibilityFilter } from './actions'
import App from './components/App'

let store = createStore(todoApp)

// store.dispatch(addTodo('hoge'))
// store.dispatch(toggleTodo(0))
// store.dispatch(setVisibilityFilter('SHOW_COMPLETED'))
// store.dispatch(addTodo('hoge'))
// console.log(store.getState())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
