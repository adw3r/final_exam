import './style.scss'

const TECHNOLOGIES = [
    'ReactJS',
    'Python',
    'JavaScript',
    'Docker',
    'Playwright',
];

function renderItems(times = 20) {
    const repeated = Array.from({ length: times }).flatMap(() => TECHNOLOGIES);
    return repeated.map((label, index) => (
        <li key={`${label}-${index}`}>
            {label}
        </li>
    ));
}

const Slider = ({ speedUp = '14s', speedDown = '16s' }) => {
    return (
        <div className={"slider"} style={{
            ['--marquee-duration-up']: speedUp,
            ['--marquee-duration-down']: speedDown,
        }}>
            <div className={'slider__columns'}>
                <div className={'marquee left'}>
                    <div className={'marquee__inner'}>
                        <ul className={'marquee__group'}>
                            {renderItems()}
                        </ul>
                        <ul className={'marquee__group'} aria-hidden={'true'}>
                            {renderItems()}
                        </ul>
                    </div>
                </div>
                <div className={'marquee right'}>
                    <div className={'marquee__inner down'} >
                        <ul className={'marquee__group'}>
                            {renderItems()}
                        </ul>
                        <ul className={'marquee__group'} aria-hidden={'true'}>
                            {renderItems()}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Slider