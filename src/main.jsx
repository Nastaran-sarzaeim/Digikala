import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { persistor, store } from './store/index.js';
import { PersistGate } from 'redux-persist/integration/react'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
