import Card from "./Card";
import card_image_1 from '/1736b40192687e0826ec81f7913b4c9f3f82d131.png'
import card_image_2 from '/9cc194a5253deb206776ff54a02b41c67b9d6954.png'
import card_image_3 from '/9ce5ed49ef17e55c59100d5ee26d94c7bd0d0172.png'
import card_image_4 from '/c3d3ceeac6eedd977a56a42e63a70cf89162be38.png'

import './style.scss'

export default function Recent() {
    const items = [
        {
            title: '3D Solar System Planets to Explore',
            body: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
            url: 'https://adw3r.github.io/jsExam/',
            icons: [],
            img: card_image_1
        },
        {
            title: 'Yoom - Video Conferencing App',
            body: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
            url: 'https://adw3r.github.io/jw_hw_33/',
            icons: [],
            img: card_image_2
        },
        {
            title: 'AI Image SaaS - Canva Application',
            body: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
            url: 'https://adw3r.github.io/jw_hw_33/',
            icons: [],
            img: card_image_3
        },
        {
            title: 'AI Image SaaS - Canva Application',
            body: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
            url: 'https://adw3r.github.io/jw_hw_33/',
            icons: [],
            img: card_image_4
        },
    ]

    return <section className={'recent container'}>
        <h2>A small selection of <span className='pink'>recent projects</span></h2>
        <div className="grid">
            {
                items.length > 0 && items.map((item) => <Card {...item} />)
            }
        </div>
    </section>
}