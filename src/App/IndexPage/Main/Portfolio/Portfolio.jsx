import './style.scss'
import earth_image from './images/earth.png?url'
import map_image from './images/map.png?url'
import code_image from './images/code.png?url'
import skeleton_image from './images/skeleton.png?url'
import Slider from "./Slider/MySlider.jsx";
import Button from "@/App/components/Button/Button.jsx";
import React, {useEffect} from "react";
import Background from "@/App/IndexPage/Main/Hero/Background.jsx";
import FOG from "vanta/src/vanta.fog.js";
import * as THREE from "three";

function Vanta() {
    useEffect(() => {
        FOG({
            el: '#portofilo_vanta',
            THREE: THREE,
            highlightColor: 0x309168,
            midtoneColor: 0x3c268c,
            lowlightColor: 0x847ec8,
            baseColor: 0x161A31,
            blurFactor: 1,
            speed: 4,
            zoom: .2,
        })
    }, []);
    return <div id='portofilo_vanta'></div>;
}

export default function Portfolio() {

    return (
        <div id='portfolio' className='portfolio container'>
            <div className='portfolio__grid'>
                <section className="grid__item first">
                    <div className='img-wrap'>
                        <img src={earth_image} alt="Portifolio image"/>
                    </div>
                    <div className='item__content'>
                        <h3>I prioritize client collaboration, fostering open communication </h3>
                    </div>
                </section>
                <section className="grid__item second">
                    <div className='img-wrap fill'>
                        <img src={map_image} alt="Map image"/>
                    </div>

                    <div className='item__content inverted light-bg'>
                        <div className="floating">
                            <span>USA</span>
                            <span>Europe</span>
                            <span>Ukraine</span>
                        </div>
                        <h3>I’m very flexible with time zone communications</h3>
                    </div>
                </section>
                <section className="grid__item third">
                    <div className='item__content with-slider'>
                        <hgroup>
                            <p>I constantly try to improve</p>
                            <h3>My tech stack</h3>
                        </hgroup>
                        <Slider/>
                    </div>
                </section>
            </div>
            <div className="portfolio__grid less-higher">
                <section className="grid__item div1">
                    <div className='img-wrap down-scaled right-left-corner'>
                        <img src={skeleton_image} alt="Code image"/>
                    </div>
                    <div className='item__content inverted'>
                        <h4>
                            Tech enthusiast with a passion for development.
                        </h4>
                    </div>
                </section>
                <section className="grid__item inverted div2">
                    <Vanta/>
                    <div className='item__content no-bg'>
                        <h4 className={'centered'}>
                            Do you want to start a project together?
                        </h4>
                        <Button text={'Contact me'} className={'small center'}/>
                    </div>
                </section>
                <section className="grid__item div3">
                    <div className='img-wrap down-scaled'>
                        <img src={code_image} alt="Code image"/>
                    </div>
                    <div className='item__content center'>
                        <hgroup>
                            <p className={'bigger'}>The Inside Scoop</p>
                            <h4>
                                Currently building a JS Animation library
                            </h4>
                        </hgroup>
                    </div>
                </section>
            </div>
        </div>
    )
}