import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import Editor from './views/Editor.js'

export const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Editor />
  </Provider>
)

export default App
