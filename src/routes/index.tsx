import { createFileRoute } from '@tanstack/react-router'
import IndexPage from '../App/IndexPage'

export const Route = createFileRoute('/')({
  component: IndexPage,
})
