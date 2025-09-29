import './style.scss'
import React from 'react'

const TECHNOLOGIES: string[] = [
    'Python',
    'JavaScript',
    'HTML5',
    'CSS3',
    'ReactJS',
    'HTMX',
    'Docker',
];

function renderItems(times = 20) {
    const repeated = Array.from({length: times}).flatMap(() => TECHNOLOGIES);
    return repeated.map((label, index) => (
        <li key={`${label}-${index}`}>
            {label}
        </li>
    ));
}

const Slider: React.FC = () => {
    return (
        <div className={"slider"}>
            <div className={'slider__columns'}>
                <div className={'marquee left'}>
                    <div className={'marquee__inner'}>
                        <ul className={'marquee__group'}>
                            {renderItems()}
                        </ul>
                        <ul className={'marquee__group'} aria-hidden={'true'}>
                            {renderItems()}
                        </ul>
                    </div>
                </div>
                <div className={'marquee right'}>
                    <div className={'marquee__inner down'}>
                        <ul className={'marquee__group'}>
                            {renderItems()}
                        </ul>
                        <ul className={'marquee__group'} aria-hidden={'true'}>
                            {renderItems()}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Slider



