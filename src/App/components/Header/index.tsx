import React from 'react'
import './style.scss'

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/#recent">Recent</a></li>
                    <li><a href="/#reviews">Reviews</a></li>
                    <li><a href="/#experience">Experience</a></li>
                    <li><a href="/#approach">Approach</a></li>
                    <li><a href="/contacts">Contacts</a></li>
                </ul>
            </nav>
        </header>
    )
}
