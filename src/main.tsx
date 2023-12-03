import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { element } from './routes/AllRoutes'
import IsLoading from './pages/IsLoading'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Suspense fallback={<IsLoading />}>
    <RouterProvider router={element} />
    </Suspense>
  </React.StrictMode>,
)
