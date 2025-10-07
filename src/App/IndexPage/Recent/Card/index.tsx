import {ReactElement} from "react";
import './style.scss'

import card_bg from './card_bg.png'

interface CardProps {
    title: string,
    body: string,
    url: string,
    img: string,
    icons: string[]
}

const Card = ({title, body, url, img, icons}: CardProps): ReactElement => <article>
    <a href={url} className={'card'} title={title}>
        <div className={'card__content'}>
            <div className="card__img" style={{backgroundImage: `url(${card_bg})`}}>
                <div className="img-wrap">
                    <img src={img} alt={title}/>
                </div>
            </div>
            <div className={'content__title'}>
                <h3 className="title">
                    {title}
                </h3>
                <p className={'body'}>
                    {body}
                </p>
            </div>
        </div>
        <div className={'bottom'}>

            <ul className={'icons'}>
                {icons.length > 0 && icons.map((icon: string) => {
                    let href = `/icons/${icon}.svg`;
                    return (
                        <li key={icon} className={'icon'}>
                            <img src={href} alt={`${icon}-icon`}/>
                        </li>
                    );
                })}
            </ul>
            <span style={{textDecoration: 'underline'}} className={'click-me'}>
                Click me
            </span>
        </div>
    </a>
</article>;
export default Card;