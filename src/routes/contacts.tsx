import {createFileRoute} from '@tanstack/react-router'
import ContactsPage from "@/App/Contacts";

export const Route = createFileRoute('/contacts')({
    component: ContactsPage,
})
