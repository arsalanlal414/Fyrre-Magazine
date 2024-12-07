import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DarkModeProvider } from './hooks/DarkModeContext.jsx'
import { ApiProvider } from './hooks/ApiContext.jsx'
import { DataProvider } from './hooks/DataContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <DarkModeProvider>
          <App />
      </DarkModeProvider>
    </DataProvider>
  </StrictMode>
)
