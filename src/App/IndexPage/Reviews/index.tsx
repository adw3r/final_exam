import './style.scss'
import QuotesList from "@/App/IndexPage/Reviews/QuotesList";

interface IServiceLogo {
    image: string
}

export default function Reviews() {
    const serviceImages = [
        '/logos/cloudinary.png',
        '/logos/stear.png',
        '/logos/hostinger.png',
        '/logos/appwrite.png',
        '/logos/docker.png',
    ]

    const ServiceLogo = ({image}: IServiceLogo) => {
        return <div className="img-wrap">
            <img src={image} alt={image.split('/')[2]} className="tech__icon"/>
        </div>;
    };
    return <section className={'reviews'} id={'reviews'}>
        <h2>
            Kind words from <span className='pink'>satisfied clients</span>
        </h2>
        <QuotesList/>
        <ul className={'technologies container'}>
            {serviceImages.map((image, idx) => <li key={idx}><ServiceLogo  image={image}/></li>)}
        </ul>
    </section>
}
