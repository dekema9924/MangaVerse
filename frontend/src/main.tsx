import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { MenuProvider } from './context/MenuContext.tsx'
import { Provider } from 'react-redux'
import store from './store/Store.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MenuProvider>
          <App />
        </MenuProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
