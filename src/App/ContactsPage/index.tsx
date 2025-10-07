import './style.scss'
import Layout from "@/App/components/Layout";


export default function ContactsPage() {
    return (
        <Layout>
            <main className="contact-page container">
                <h1>Reach me out</h1>
                <form action="/contacts" method={'POST'}>
                    <label htmlFor="name">
                        <input type="text" id="name" name="name" placeholder="Name" aria-placeholder={'Name'}/>
                    </label>
                    <label htmlFor="email">
                        <input type="text" id="email" name="email" placeholder="Email" aria-placeholder={'Email'}/>
                    </label>
                    <label htmlFor="message">
                        <input type="text" id="message" name="message" placeholder="Message" aria-placeholder={'Message'}/>
                    </label>
                </form>
            </main>
        </Layout>
    )
}
