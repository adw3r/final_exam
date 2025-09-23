import earth_image from "./earth.png";
import map_image from "./map.png";
import Slider from "./Slider/MySlider.jsx";

const FirstPart = () => {
    return <div className='portfolio__grid'>
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
    </div>;
}

export default FirstPart;