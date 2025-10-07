import './style.scss'
import Button from "@/App/components/Button/Button";


const ContactForm = () => <form action="/contacts" method={'POST'} className="contact-form" noValidate>
    <div className="row">
        <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" autoComplete="name" required/>
        </div>
        <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" autoComplete="email" required/>
        </div>
    </div>
    <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Tell me about your project or question..." rows={6}
                  required/>
    </div>
    <div className="actions">
        <Button text="Send" className="center"/>
    </div>
</form>;

export default ContactForm;