import './style.scss'
import Layout from "@/App/components/Layout";
import ContactForm from "@/App/components/ContactForm";


export default function ContactsPage() {
    return (
        <Layout>
            <main className="contact-page container">
                <h1>Reach me out</h1>
                <p className="subtitle">Have a question or want to work together? Drop a message.</p>
                <ContactForm/>
            </main>
        </Layout>
    )
}
