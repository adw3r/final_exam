import { createFileRoute } from '@tanstack/react-router'
import App from '../App/App.jsx'
export const Route = createFileRoute('/contacts')({
  component: App,
})
