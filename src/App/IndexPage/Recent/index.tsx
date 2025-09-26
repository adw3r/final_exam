import Card from "./Card";
import mono_automation_image from '/img.png'
import proxy_parser_image from '/img_1.png'
import rpi_sms_image from '/img_3.png'
import copart_image from '/img_2.png'


import './style.scss'

type TIcons = 'docker' | 'htmx' | 'python' | 'typescript' | 'react'

type TItem = {
    title: string,
    body: string,
    url: string,
    icons: TIcons[],
    img: string
}

export default function Recent() {
    const items: TItem[] = [
        {
            title: 'Personal budget app',
            body: 'Integration of MonoBank API and Google`s spreadsheets in one app using FastAPI + HTMX stack',
            url: 'https://adw3r.tech/',
            icons: ['python', 'docker', 'htmx', 'typescript', 'react'],
            img: mono_automation_image
        },
        {
            title: 'Free Proxy scraper',
            body: 'A high-performance, asynchronous proxy scraper and validator that discovers free proxies from GitHub repositories and validates their functionality.',
            url: 'https://github.com/adw3r/proxy_parser',
            icons: ['python'],
            img: proxy_parser_image
        },
        {
            title: 'Low-budget sms receiver',
            body: 'Raspberry PI with SMS receiver for robotic automation scripts. 1 phone card - No headaches',
            url: 'https://github.com/adw3r/rpi_sms_receiver',
            icons: ['docker', 'htmx'],
            img: rpi_sms_image
        },
        {
            title: 'Copart Scraper',
            body: 'An automative online auction scraper with one-line bootup',
            url: 'https://github.com/adw3r/copart',
            icons: ['docker', 'htmx'],
            img: copart_image
        },
    ]

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