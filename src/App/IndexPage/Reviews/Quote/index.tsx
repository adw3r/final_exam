import './style.scss'

type TAuthor = {
    name: string,
    position: string
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
                <span className={'name'}>{author.name}</span>
                <span className={'position'}>{author.position}</span>
            </cite>
        </blockquote>
    );
};

