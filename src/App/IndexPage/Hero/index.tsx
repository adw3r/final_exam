import React from 'react';
import './style.scss'
import Button from "@/App/components/Button/Button";
import {TypeAnimation} from 'react-type-animation';
import LiquidEther from "./Bg";

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
        <div style={{ width: '100%', height: '100dvh', position: 'absolute'}}>
            <LiquidEther
                colors={[ '#4a11ff', '#e0bde0', '#B19EEF' ]}
                mouseForce={20}
                cursorSize={100}
                isViscous={false}
                viscous={90}
                iterationsViscous={32}
                iterationsPoisson={32}
                resolution={0.5}
                isBounce={true}
                autoDemo={true}
                autoSpeed={0.2}
                autoIntensity={3}
                takeoverDuration={0}
                autoResumeDelay={0}
                autoRampDuration={0.6}
            />
        </div>
        <div className='hero__content container' >
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
                <Button text='Contact me'/>
            </a>
        </div>
    </section>
}
