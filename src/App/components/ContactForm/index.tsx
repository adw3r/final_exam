import './style.scss'
import Button from "@/App/components/Button/Button";
import {SyntheticEvent, useState} from "react";


const sendMessage = async (text: string) => {
    const url = `https://api.telegram.org/bot8461357406:AAF-yAu2zzBLF20qFg9tPhCnKAYdZL9FM5k/sendMessage`;

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: '@adw3r_tech',
            text: text
        }),
    });

    const data = await response.json();
    console.log(data);
    return data;
}

const ContactForm = () => {
    let onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        const payload = Object.fromEntries(new FormData(e.target as HTMLFormElement).entries());
        (async () => {
            console.log(payload)
            const resp = await sendMessage('text: ' + payload.message + ' \n name: ' + payload.name + ' \n email: ' + payload.email)
            console.log(resp)
            if (resp.ok) {
                console.log('Message sent successfully')
            } else {
                console.log('Message not sent')
            }
        })()
    };
    return <form className="contact-form" onSubmit={onSubmit}>
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
</form>};

export default ContactForm;