import { createFileRoute } from '@tanstack/react-router'
import IndexPage from '../App/IndexPage/IndexPage.jsx'

export const Route = createFileRoute('/')({
  component: IndexPage,
})
