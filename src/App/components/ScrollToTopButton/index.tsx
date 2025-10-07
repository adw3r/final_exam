import React, {useEffect, useState} from 'react'
import './style.scss'

export default function ScrollToTopButton(): React.JSX.Element | null {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > window.innerHeight * 0.5)
        }
        onScroll()
        window.addEventListener('scroll', onScroll, {passive: true})
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    if (!visible) return null

    return (
        <button
            type="button"
            aria-label="Scroll to top"
            className="scroll-to-top"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
            ↑
        </button>
    )
}


