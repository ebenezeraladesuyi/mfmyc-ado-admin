import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { element } from './routes/AllRoutes'
import IsLoading from './pages/IsLoading'
import { PersistGate } from 'redux-persist/integration/react'
import { QueryClient } from '@tanstack/react-query'
import { persistStore } from "redux-persist"
import { Provider } from 'react-redux/es/exports';
import { Store } from './global/Sttore';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const myclient = new QueryClient();
const persiststore = persistStore(Store)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Suspense fallback={<IsLoading />} >
        <Provider store={Store}>
          <PersistGate persistor={persiststore}>
            <QueryClientProvider client={myclient} >
                <RouterProvider router={element} />
              <ReactQueryDevtools />
            </QueryClientProvider>
          </PersistGate>
        </Provider>
    </Suspense>
  </React.StrictMode>,
)
