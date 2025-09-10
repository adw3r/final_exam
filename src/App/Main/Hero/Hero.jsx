import React, {useEffect, useRef} from 'react';
import * as THREE from 'three'; // Import Three.js if your effect uses it
import FOG from 'vanta/src/vanta.fog.js'; // Import the specific Vanta effect
import './style.scss'
import Button from "../../components/Button/Button.jsx";
import {TypeAnimation} from 'react-type-animation';

const TypeComponent = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Full-stack',
                1500, // wait 1s before replacing "Mice" with "Hamsters"
                'Python',
                1500,
                'Scraping',
                1500,
                'Automation',
                1500
            ]}
            wrapper="span"
            speed={50}
            style={{display: 'inline-block'}}
            repeat={Infinity}
        />
    );
};

const VantaBackground = () => {
    useEffect(() => {
        FOG({
            el: '#vanta',
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0x309168,
            midtoneColor: 0x3c268c,
            lowlightColor: 0x847ec8,
            baseColor: 0x161A31,
            blurFactor: 0.43,
            speed: 1.20,
            zoom: 0.40,
            width: '100%',
            height: '100%'
        })
    }, []);

    return <div className="hero__bg" id='vanta'></div>;
};

export default function Hero() {
    return <section id='hero' className='hero container'>
        <VantaBackground/>

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
            <Button text='See my work'/>
        </div>
    </section>
}
