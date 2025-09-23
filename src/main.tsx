import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.scss'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree })
const rootEl = document.getElementById('root') as HTMLElement
createRoot(rootEl).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)



