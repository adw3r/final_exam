import './style.scss'
import Button from "../../components/Button/Button.jsx";
import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
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
            style={{ display: 'inline-block' }}
            repeat={Infinity}
        />
    );
};
export default function Hero() {
    return <section id='hero' className='hero container'>
        <hgroup>
            <p>
                Dynamic Web Magic with Python, JavaScript
            </p>
            <h1>
                Transforming Concepts into Seamless <span className='pink'>User Experiences</span>
            </h1>
        </hgroup>
        <p>
            Hi! I’m Oleksii Naidiuk, a <ExampleComponent/> Developer based in Ukraine.
        </p>
        <Button text='See my work'/>
    </section>
}
