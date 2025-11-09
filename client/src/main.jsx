import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Browserrouter is used to create react router
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      {/* in the below app we can use any data from context */}
      <App /> 
    </AppContextProvider>
  </BrowserRouter>,
)
