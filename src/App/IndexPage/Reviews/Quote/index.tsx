import './style.scss'

type TAuthor = {
    name: string,
    position: string
    image: string
}


export interface IQuote {
    text: string
    author: TAuthor
}
export const Quote = ({ text, author }: IQuote) => {
    return (
        <blockquote>
            <p>{text}</p>
            <cite className={'author'}>
                <div className="img-wrap">
                    <img src={author.image} alt={`${author.name}`}/>
                </div>
                <div className={'text'}>

                    <span className={'name'}>{author.name}</span>
                    <span className={'position'}>{author.position}</span>
                </div>
            </cite>
        </blockquote>
    );
};

