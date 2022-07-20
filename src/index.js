import './styles/main.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './components/App/template/App'
import DataProvider from './components/DataProvider/DataProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
)
