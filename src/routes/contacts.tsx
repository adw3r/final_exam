import {createFileRoute} from '@tanstack/react-router'
import Footer from "@/App/Footer/Footer.jsx";
import Header from "@/App/Header/Header.jsx";


const Contacts = () => {
    return (
        <>
            <Header/>
            <div>Contacts</div>
            <Footer/>
        </>
    )
}
export const Route = createFileRoute('/contacts')({
    component: Contacts,
})
