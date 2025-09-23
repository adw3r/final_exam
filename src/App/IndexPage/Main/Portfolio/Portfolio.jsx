import './style.scss'
import FirstPart from "@/App/IndexPage/Main/Portfolio/FirstPart/FirstPart.jsx";
import SecondPart from "@/App/IndexPage/Main/Portfolio/SecondPart/SecondPart.jsx";

export default function Portfolio() {
    return (
        <div id='portfolio' className='portfolio container'>
            <FirstPart/>
            <SecondPart/>
        </div>
    )
}