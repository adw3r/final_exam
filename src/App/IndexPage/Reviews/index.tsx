import './style.scss'
import {useEffect, useMemo, useRef, useState} from "react";
import {Quote, IQuote} from "./Quote";


export default function Reviews() {
    const [quotes, setQuotes] = useState<IQuote[]>([]);
    const containerRef = useRef<HTMLUListElement | null>(null);
    const speedPixelsPerSecond = 90; // autoplay speed

    const loopedQuotes = useMemo(() => {
        if (!quotes || quotes.length === 0) return [] as IQuote[];
        return [...quotes, ...quotes, ...quotes];
    }, [quotes]);

    useEffect(() => {
        fetch('/quotes.json')
            .then((res) => res.json())
            .then((data: IQuote[]) => setQuotes(data))
            .catch((err) => console.error("Failed to load quotes:", err));
    }, []);

    useEffect(() => {
        const el = containerRef.current;
        if (!el || loopedQuotes.length === 0) return;

        const setToMiddle = () => {
            const oneSetWidth = el.scrollWidth / 3;
            el.scrollLeft = oneSetWidth;
        };
        const idInit = window.requestAnimationFrame(setToMiddle);

        let rafId = 0;
        let lastTs = performance.now();
        let isPaused = false;
        const tick = (ts: number) => {
            const dt = (ts - lastTs) / 1000;
            lastTs = ts;

            const oneSetWidth = el.scrollWidth / 3;
            const max = oneSetWidth * 2;
            if (!isPaused) {
                el.scrollLeft += speedPixelsPerSecond * dt;
            }

            if (el.scrollLeft >= max) {
                el.scrollLeft = el.scrollLeft - oneSetWidth;
            } else if (el.scrollLeft <= 0) {
                el.scrollLeft = el.scrollLeft + oneSetWidth;
            }

            rafId = window.requestAnimationFrame(tick);
        };
        rafId = window.requestAnimationFrame(tick);

        const onEnter = () => { isPaused = true; };
        const onLeave = () => { isPaused = false; lastTs = performance.now(); };
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
        el.addEventListener('pointerenter', onEnter as EventListener);
        el.addEventListener('pointerleave', onLeave as EventListener);

        return () => {
            window.cancelAnimationFrame(idInit);
            window.cancelAnimationFrame(rafId);
            el.removeEventListener('mouseenter', onEnter);
            el.removeEventListener('mouseleave', onLeave);
            el.removeEventListener('pointerenter', onEnter as EventListener);
            el.removeEventListener('pointerleave', onLeave as EventListener);
        };
    }, [loopedQuotes.length]);

    return <section className={'reviews'}>
        <h2>
            Kind words from <span className='pink'>satisfied clients</span>
        </h2>
        <ul className={'quotes'} ref={containerRef}>
            {loopedQuotes.map((quote, idx) => <li key={`quote_${idx}`}><Quote {...quote}/></li>)}
        </ul>
        <ul className={'technologies'}>
            <li>
                <div className="tech__icon"></div>
            </li>
        </ul>
    </section>
}
