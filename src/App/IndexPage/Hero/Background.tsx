import React, {useEffect} from 'react';
import * as THREE from 'three';
import FOG from 'vanta/src/vanta.fog.js';
import './style.scss'

const Background: React.FC = () => {
    useEffect(() => {
        FOG({
            el: '#hero_vanta',
            THREE: THREE,
            highlightColor: 0x309168,
            midtoneColor: 0x3c268c,
            lowlightColor: 0x847ec8,
            baseColor: 0x161A31,
            blurFactor: .7,
            speed: 4,
            zoom: 2.5,
        })
    }, []);

    return <div className="hero__bg" id='hero_vanta'></div>;
};
export default Background;
