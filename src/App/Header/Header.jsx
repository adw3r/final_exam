import React from 'react'
import './style.scss'

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="/#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/#projects">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="/#testimonials">
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a href="/contacts">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
