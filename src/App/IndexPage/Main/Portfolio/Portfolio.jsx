import earth from './images/earth.png?url'
import './style.scss'

export default function Portfolio() {
    return (
        <div className='portfolio container'>
            <div className='portfolio__grid'>
                <section className="grid__item bigger">
                    <div className='img-wrap'>
                        <img src={earth} alt="Portifolio image"/>
                    </div>
                    <div className='item__content'>
                        <h3>I prioritize client collaboration, fostering open communication </h3>
                    </div>
                </section>
                {/*<section className="grid__item">*/}
                {/*    <div className='item__content'>*/}
                {/*        <h3>I’m very flexible with time zone communications</h3>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*<section className="grid__item">*/}
                {/*    <div className='item__content'>*/}
                {/*        <h3>My tech stack</h3>*/}
                {/*    </div>*/}
                {/*</section>*/}
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