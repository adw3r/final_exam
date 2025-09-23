import {createFileRoute} from '@tanstack/react-router'
import ContactsPage from "@/App/ContactsPage";

export const Route = createFileRoute('/contacts')({
    component: ContactsPage,
})
