import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import favicon from './assets/favicon.ico'
import './i18n'

const icon = document.querySelector<HTMLLinkElement>("link[rel='icon']")
if (icon) icon.href = favicon

const rootElement = document.getElementById('root')

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StrictMode>
  )
} else {
  console.error('Root element not found')
}
