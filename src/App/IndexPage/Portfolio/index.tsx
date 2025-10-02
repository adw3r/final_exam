import './style.scss'
import React from "react";
import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";



export default function Portfolio(): React.JSX.Element {

    return (
        <div id='portfolio' className='portfolio container'>
            <FirstPart/>
            <SecondPart/>
        </div>
    )
}
