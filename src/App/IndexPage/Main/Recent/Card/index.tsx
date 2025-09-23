import {ReactElement} from "react";
import './style.scss'

type CardProps = { title: string, body: string, url: string, img: string, icons: string[] }

const Card = ({title, body, url, img, icons}: CardProps): ReactElement => <div className="card ">
    <div className="img-wrap">
        <img src={img} alt="Card image" />
    </div>
    <span className="title">
        {title}
    </span>
    <p className={'body'}>
        {body}
    </p>

    <ul>
        {icons.length > 0 && icons.map((icon: string) => (
            <li key={icon} className={'icon'}>
                {icon}
            </li>
        ))}
    </ul>
    <a href={url}>Check out</a>
</div>;
export default Card;