import React, {useEffect} from 'react';
import * as THREE from 'three'; // Import Three.js if your effect uses it
import FOG from 'vanta/src/vanta.fog.js'; // Import the specific Vanta effect
import './style.scss'

const Background = () => {
    useEffect(() => {
        FOG({
            el: '#vanta',
            THREE: THREE,
            highlightColor: 0x309168,
            midtoneColor: 0x3c268c,
            lowlightColor: 0x847ec8,
            baseColor: 0x161A31,
            blurFactor: 0.7,
            speed: 1.20,
            zoom: 1,
        })
    }, []);

    return <div className="hero__bg" id='vanta'></div>;
};
export default Background;