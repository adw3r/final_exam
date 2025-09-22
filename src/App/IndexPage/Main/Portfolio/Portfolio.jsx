import earth from './images/earth.png?url'
import map_image from './images/map.png?url'
import './style.scss'
import Slider from "./MySlider.jsx";

export default function Portfolio() {
    return (
        <div id='portfolio' className='portfolio container'>
            <div className='portfolio__grid'>
                <section className="grid__item first">
                    <div className='img-wrap'>
                        <img src={earth} alt="Portifolio image"/>
                    </div>
                    <div className='item__content'>
                        <h3>I prioritize client collaboration, fostering open communication </h3>
                    </div>
                </section>
                <section className="grid__item second">
                    <div className='img-wrap fill'>
                        <img src={map_image} alt="Map image"/>
                    </div>

                    <div className='item__content'>
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
            <div className="porfolio__grid">
                <section className="grid__item">
                    <div className='item__content'></div>
                </section>
                <section className="grid__item">
                    <div className='item__content'></div>
                </section>
                <section className="grid__item">
                    <div className='item__content'></div>
                </section>
            </div>
        </div>
    )
}