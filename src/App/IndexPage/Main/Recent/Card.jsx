const Card = ({title, body, url, img, icons}) => <div className="card ">
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
        {icons.length > 0 && icons.map(icon => (
            <li key={icon} className={'icon'}>
                {icon}
            </li>
        ))}
    </ul>
    <a href={url}>Check out</a>
</div>;
export default Card;