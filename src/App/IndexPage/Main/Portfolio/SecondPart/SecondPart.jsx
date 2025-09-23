import skeleton_image from "./skeleton.png";
import code_image from "./code.png";

const SecondPart = () => <div className="portfolio__grid less-higher">
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
        <div className='item__content '>
            <h4 className={'centered'}>
                Do you want to start a project together?
            </h4>
            <a href="/contact" className={'btn'}>
                Contact me
            </a>

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
</div>;
export default SecondPart;