import Background from "./Background";
import React from 'react';
import './style.scss'
import Button from "@/App/components/Button/Button";
import {TypeAnimation} from 'react-type-animation';

const sequence: (string | number)[] = [
    'Full-stack', 1500, 'Python', 1500, 'Scraping', 1500, 'Automation', 1500
];
const TypeComponent: React.FC = () => {
    return (
        <TypeAnimation
            sequence={sequence}
            wrapper="span"
            speed={45}
            style={{display: 'inline-block'}}
            repeat={Infinity}
        />
    );
};
export default function Hero(): React.JSX.Element {
    return <section id='hero' className='hero container'>
        <Background/>

        <div className='hero__content container'>
            <hgroup>
                <p>
                    Dynamic Web Magic with Python and JavaScript
                </p>
                <h1>
                    Transforming Concepts into Seamless <span className='pink'>User Experiences</span>
                </h1>
            </hgroup>
            <p>
                Hi! I’m Oleksii Naidiuk, a <TypeComponent/> Developer based in Ukraine.
            </p>
            <a href="#portfolio" className='hero__cta'>
                <Button text='See my work'/>
            </a>
        </div>
    </section>
}
