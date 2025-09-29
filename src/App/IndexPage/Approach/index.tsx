import './style.scss'
import React from 'react'


type TFront = {
    name: string,
}
type TBack = {
    name: string,
    title: string,
    description: string
}

interface ICard {
    front: TFront,
    back: TBack
}

const Card = ({front, back}: ICard) => {
    const [flipped, setFlipped] = React.useState(false)
    const toggle = () => setFlipped(v => !v)
    return <li className={`card ${flipped ? 'is-flipped' : ''}`}>
        <button type="button"
                className="card__inner"
                onClick={toggle}
                aria-pressed={flipped}
                aria-label={`Toggle ${back.name} details`}>
            <div className="front">
                <span className={'phase'}>{front.name}</span>
            </div>
            <div className="back">
                <span className={'phase'}>{back.name}</span>
                <h3>{back.title}</h3>
                <span className={'description'}>{back.description}</span>
            </div>
        </button>
    </li>
}


export default function Approach(): React.JSX.Element {

    const cards: ICard[] = [
        {
            front: {
                name: 'Phase 1'
            },
            back: {
                name: 'Phase 1',
                title: 'Title 1',
                description: 'Desc 1'
            }
        },
        {
            front: {
                name: 'Phase 2'
            },
            back: {
                name: 'Phase 2',
                title: 'Development & Progress Update',
                description: 'Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.'
            }
        },
        {
            front: {
                name: 'Phase 3'
            },
            back: {
                name: 'Phase 3',
                title: 'Title 3',
                description: 'Desc 3'
            }
        },
    ]

    return <section className={'approach container'}>
        <h2>
            My <span className='pink'>approach</span>
        </h2>
        <ul className={'cards'}>
            {cards.map((card, idx) => <Card key={idx} {...card}/>)}
        </ul>
    </section>
}
