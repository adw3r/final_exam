import {ReactElement} from "react";
import './style.scss'

import card_bg from './card_bg.png'
// @ts-ignore
import icon_sprite from "@/assets/sprite.svg"

interface CardProps {
    title: string,
    body: string,
    url: string,
    img: string,
    icons: string[]
}

const Card = ({title, body, url, img, icons}: CardProps): ReactElement => <article className="card">
    <div className="card__img" style={{backgroundImage: `url(${card_bg})`}}>
        <div className="img-wrap">
            <img src={img}/>
        </div>
    </div>
    <div className={'card__content'}>
        <div className={'content__title'}>
            <h3 className="title">
                {title}
            </h3>
            <p className={'body'}>
                {body}
            </p>
        </div>
        <div className="content__items">
            <ul>
                {icons.length > 0 && icons.map((icon: string) => (
                    <li key={icon} className={'icon'}>
                        <svg>

                            <svg className="icon">
                                <use xlinkHref={icon_sprite+"#" + icon}></use>
                            </svg>
                        </svg>
                    </li>
                ))}
            </ul>
            <a href={url}>Check out</a>
        </div>
    </div>
</article>;
export default Card;