import './style.scss'
import React from "react";
import FirstPart from "@/App/IndexPage/Main/Portfolio/FirstPart/FirstPart";
import SecondPart from "@/App/IndexPage/Main/Portfolio/SecondPart/SecondPart";

export default function Portfolio(): React.JSX.Element {

    return (
        <div id='portfolio' className='portfolio container'>
            <FirstPart/>
            <SecondPart/>
        </div>
    )
}
