import './App.scss'
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Main from "./Main/Main.jsx";

export default function App() {
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
