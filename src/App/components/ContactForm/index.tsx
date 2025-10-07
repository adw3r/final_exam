import './style.scss'
import Button from "@/App/components/Button/Button";
import {SyntheticEvent, useState} from "react";


const API_ROUTE = 'localhost:3000';
const url = `http://${API_ROUTE}/api/sendMessage`;

const sendMessage = async (text: string) => {

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            text: text,
        }),
    });

    return await response.json();
}

const ContactForm = () => {
    const [isSuccess, setIsSuccess] = useState(false)

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        const payload = Object.fromEntries(new FormData(e.target as HTMLFormElement).entries());
        (async () => {
            const resp = await sendMessage('text: ' + payload.message + ' \n name: ' + payload.name + ' \n email: ' + payload.email)
            if (resp.ok) {
                setIsSuccess(true);
                (e.target as HTMLFormElement).reset();
            } else {
                console.log('Message not sent')
            }
        })()
    };

    return <>
        <form className="contact-form" onSubmit={onSubmit}>
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
        </form>
        <div className={`contact-success ${isSuccess ? 'open' : ''}`} onClick={() => setIsSuccess(false)}>
            <div className={'panel'} onClick={(e) => e.stopPropagation()}>
                <h3>Message sent</h3>
                <p>Thanks! I will get back to you shortly.</p>
                <Button text={'Close'} className={'small center'} onClick={() => setIsSuccess(false)}/>
            </div>
        </div>
    </>
};

export default ContactForm;