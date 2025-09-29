import './style.scss'
import {useEffect, useState} from "react";
import {Quote, IQuote} from "./Quote";


export default function Reviews() {
    const [quotes, setQuotes] = useState<IQuote[]>([]);

    useEffect(() => {
        fetch('/quotes.json')
            .then((res) => res.json())
            .then((data: IQuote[]) => setQuotes(data))
            .catch((err) => console.error("Failed to load quotes:", err));
    }, []);

    return <section className={'reviews container'}>
        <h2>
            Kind words from <span className='pink'>satisfied clients</span>
        </h2>
        <ul className={'quotes'}>
            {quotes.map((quote) => <li><Quote {...quote}/></li>)}
        </ul>
        <ul className={'technologies'}>
            <li>
                <div className="tech__icon"></div>
            </li>
        </ul>
    </section>
}
