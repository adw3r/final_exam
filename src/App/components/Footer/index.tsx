import './style.scss'

import React from 'react'


interface IconInterface {
    href: string,
    svg_path: string
};

function Icon({href, svg_path}: IconInterface) {
    return <a href={href} target="_blank" rel="noreferrer" className={'social_icon'}>
        <svg className={'icon'} >
            <use xlinkHref={svg_path}></use>
        </svg>
    </a>
}


export default function Footer() {
    return (
        <footer className={'footer container'}>

            <span className={'copyright'}>Copyright ©2025 Alexey Naidiuk</span>
            <ul>
                <li>
                    <Icon href={'https://github.com/adw3r'} svg_path={'/icons/github.svg'}/>
                </li>
                <li>
                    <Icon href={'https://www.instagram.com/oleksii_naidiuk/'} svg_path={'/icons/instagram.svg'}/>
                </li>
                <li>
                    <Icon href={'https://www.linkedin.com/in/alexeynaidiuk/'} svg_path={'/icons/linkedin.svg'}/>
                </li>
                <li>
                    <Icon href={'https://t.me/Alexey_naidiuk'} svg_path={'/icons/telegram.svg'}/>
                </li>
            </ul>
        </footer>
    )
}
