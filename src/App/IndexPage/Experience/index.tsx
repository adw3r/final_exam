import React, {useEffect, useState} from 'react'
import './style.scss'
import {EXPERIENCE_URL} from "@/config";

interface IListItem {
    title: string,
    body: string,
    image: string
}

function ListItem({title, body, image}: IListItem) {
    return <li className={'item'}>
        <div className={"img-wrap"}>
            <img src={image} alt={title.toLowerCase().split(' ').join('-')}/>
        </div>
        <div className={"content"}>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    </li>;
}

const experienceUrl = '/experience.json';

export default function Experience(): React.JSX.Element {
    const [items, setItems] = useState<IListItem[]>([]);

    useEffect(() => {
        const resp = fetch(EXPERIENCE_URL)
        resp.then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => console.error("Failed to load projects:", err))
    }, [])


    return <section className={'experience container'}>
        <h2>
            My <span className='pink'>work experience</span>
        </h2>
        <ul className={"grid"}>
            {
                items.length > 0 &&
                items.map((item, idx) => {
                        return <ListItem key={idx} {...item}/>
                    }
                )
            }
        </ul>
    </section>
}
