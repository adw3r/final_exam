import Card from "./Card";
import './style.scss'
import {useEffect, useState} from "react";

type TIcons = 'docker' | 'htmx' | 'python' | 'typescript' | 'react' | 'ubuntu'

type TItem = {
    title: string,
    body: string,
    url: string,
    icons: TIcons[],
    img: string
}

export default function Recent() {
    const [items, setItems] = useState<TItem[]>([]);

    useEffect(() => {
        const resp = fetch('/recents.json')
        resp.then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => console.error("Failed to load projects:", err))
    }, [])

    return <section className={'recent container'}>
        <h2>A small selection of <span className='pink'>recent projects</span></h2>
        <div className="grid">
            {
                items.length > 0 && items.map((item) =>
                    <Card {...item} />
                )
            }
        </div>
    </section>
}