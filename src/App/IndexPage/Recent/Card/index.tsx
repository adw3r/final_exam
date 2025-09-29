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
            <ul className={'icons'}>
                {icons.length > 0 && icons.map((icon: string) => {
                    let href = `/icons/${icon}.svg`;
                    return (
                        <li key={icon} className={'icon'}>
                            <img src={href} alt={`${icon}-icon`}/>
                            {/*<svg className="icon">*/}
                            {/*    <use xlinkHref={href}></use>*/}
                            {/*</svg>*/}
                        </li>
                    );
                })}
            </ul>
            <a href={url} className={'check-out'}>
                <span>Check out project</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                    <path
                        d="M0.292893 11.7929C-0.0976311 12.1834 -0.0976311 12.8166 0.292893 13.2071C0.683418 13.5976 1.31658 13.5976 1.70711 13.2071L0.292893 11.7929ZM13 1.5C13 0.947715 12.5523 0.5 12 0.5L3 0.500001C2.44771 0.5 2 0.947716 2 1.5C2 2.05228 2.44772 2.5 3 2.5L11 2.5L11 10.5C11 11.0523 11.4477 11.5 12 11.5C12.5523 11.5 13 11.0523 13 10.5L13 1.5ZM1.70711 13.2071L12.7071 2.20711L11.2929 0.792894L0.292893 11.7929L1.70711 13.2071Z"
                        fill="#CBACF9"/>
                </svg>
            </a>
        </div>
    </div>
</article>;
export default Card;