import skeleton_image from "./skeleton.png";
import Button from "@/App/components/Button/Button";
import code_image from "./code.png";
import React, {useEffect} from "react";
import FOG from "vanta/src/vanta.fog.js";
import * as THREE from "three";
import './style.scss'

type VantaProps = { selector: string, id: string }

function Vanta({selector, id}: VantaProps) {
    useEffect(() => {
        FOG({
            el: selector,
            THREE: THREE,
            highlightColor: 0x309168,
            midtoneColor: 0x3c268c,
            lowlightColor: 0x847ec8,
            baseColor: 0x161A31,
            blurFactor: 1,
            speed: 4, zoom: .2
        })
    }, [selector]);
    return <div id={id}></div>;
}

const SecondPart: React.FC = () => {
    return <div className="portfolio__grid second_part less-higher">
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
            <Vanta id='profile_vanta' selector='#profile_vanta'/>
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

}
export default SecondPart;
