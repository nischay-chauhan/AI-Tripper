import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Trip from './pages/trip/Trip.tsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />
  },
  {
    path : 'create-trip',
    element : <Trip />
  }
  ])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
