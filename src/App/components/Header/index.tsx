import React, {useState} from 'react'
import './style.scss'

export default function Header() {
    const [open, setOpen] = useState(false)

    const close = () => setOpen(false)
    const toggle = () => setOpen(prev => !prev)

    return (
        <>
            <header>
                <nav>
                    <a className={'brand'} href={'/'} aria-label={'Home'}>
                        <img src={'/favicon-32x32.png'} alt="Adw3r.tech logo"/>

                        <span>Adw3r.tech</span>
                    </a>

                    <ul>
                        <li><a href="/#recent">Recent</a></li>
                        <li><a href="/#reviews">Reviews</a></li>
                        <li><a href="/#experience">Experience</a></li>
                        <li><a href="/#approach">Approach</a></li>
                        <li><a href="/contacts">Contacts</a></li>
                    </ul>
                    <button
                        className={'burger'}
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        aria-expanded={open}
                        aria-controls={'nav-modal'}
                        onClick={toggle}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                            <rect x="3" y="6" width="18" height="2" rx="1"/>
                            <rect x="3" y="11" width="18" height="2" rx="1"/>
                            <rect x="3" y="16" width="18" height="2" rx="1"/>
                        </svg>

                    </button>
                </nav>
            </header>

            <div id={'nav-modal'} className={`nav-modal ${open ? 'open' : ''}`} onClick={close}>
                <div className={'modal-panel'} onClick={(e) => e.stopPropagation()}>
                    <ul>
                        <li><a href="/#recent" onClick={close}>Recent</a></li>
                        <li><a href="/#reviews" onClick={close}>Reviews</a></li>
                        <li><a href="/#experience" onClick={close}>Experience</a></li>
                        <li><a href="/#approach" onClick={close}>Approach</a></li>
                        <li><a href="/contacts" onClick={close}>Contacts</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
