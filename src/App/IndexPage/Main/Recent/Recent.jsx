import Card from "./Card.jsx";
import card_1_image from '/public/Card.png?url'
import card_2_image from '/public/Card (1).png?url'


export default function Recent() {
    const items = [
        {title: 'Monticello BeetRoot homework', body: 'Body', url: 'https://adw3r.github.io/jsExam/', icons: [], img: card_1_image},
        {title: 'OMDB API Front-end', body: 'Body', url: 'https://adw3r.github.io/jw_hw_33/', icons: [], img: card_2_image},
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