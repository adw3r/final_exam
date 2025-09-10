import React from 'react'
import './style.scss'

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
