import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/AuthContext.tsx'
import { RiddleProvider } from './context/RiddlesContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RiddleProvider>
          <App />
        </RiddleProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
