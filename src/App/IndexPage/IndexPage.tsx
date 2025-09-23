import './style.scss'
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Main from "./Main/Main";

export default function IndexPage() {
    return (
        <>
            <Header/>
            <div className='page-wrapper'>
                <Main/>
            </div>
            {/*<Footer/>*/}
        </>
    )
}

