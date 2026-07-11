import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PostHogProvider } from '@posthog/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { isPostHogEnabled, posthog } from './lib/posthog'
import './styles/global.css'

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isPostHogEnabled ? <PostHogProvider client={posthog}>{app}</PostHogProvider> : app}
  </StrictMode>,
)
