import './style.scss'
import {useEffect, useMemo, useRef, useState} from "react";
import {IQuote, Quote} from "./Quote";
import {QUOTES_URL} from "@/config";

const QuotesList = () => {
    const [quotes, setQuotes] = useState<IQuote[]>([]);
    const containerRef = useRef<HTMLUListElement | null>(null);
    const speedPixelsPerSecond = 90; // autoplay speed

    const loopedQuotes = useMemo(() => {
        if (!quotes || quotes.length === 0) return [] as IQuote[];
        return [...quotes, ...quotes, ...quotes];
    }, [quotes]);

    useEffect(() => {
        fetch(QUOTES_URL)
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
        let isDragging = false;
        let dragStartX = 0;
        let dragStartScrollLeft = 0;
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

        const onEnter = () => {
            isPaused = true;
        };
        const onLeave = () => {
            isPaused = false;
            lastTs = performance.now();
        };
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
        el.addEventListener('pointerenter', onEnter as EventListener);
        el.addEventListener('pointerleave', onLeave as EventListener);

        const onPointerDown = (e: PointerEvent) => {
            isDragging = true;
            isPaused = true;
            dragStartX = e.clientX;
            dragStartScrollLeft = el.scrollLeft;
            el.style.cursor = 'grabbing';
            try {
                el.setPointerCapture(e.pointerId);
            } catch {
            }
        };
        const onPointerMove = (e: PointerEvent) => {
            if (!isDragging) return;
            const dx = e.clientX - dragStartX;
            el.scrollLeft = dragStartScrollLeft - dx;
            const oneSetWidth = el.scrollWidth / 3;
            const max = oneSetWidth * 2;
            if (el.scrollLeft >= max) {
                el.scrollLeft = el.scrollLeft - oneSetWidth;
            } else if (el.scrollLeft <= 0) {
                el.scrollLeft = el.scrollLeft + oneSetWidth;
            }
        };
        const endDrag = (e: PointerEvent) => {
            if (!isDragging) return;
            isDragging = false;
            el.style.cursor = 'grab';
            isPaused = false;
            lastTs = performance.now();
            try {
                el.releasePointerCapture(e.pointerId);
            } catch {
            }
        };
        el.addEventListener('pointerdown', onPointerDown as EventListener);
        window.addEventListener('pointermove', onPointerMove as EventListener);
        window.addEventListener('pointerup', endDrag as EventListener);
        window.addEventListener('pointercancel', endDrag as EventListener);

        return () => {
            window.cancelAnimationFrame(idInit);
            window.cancelAnimationFrame(rafId);
            el.removeEventListener('mouseenter', onEnter);
            el.removeEventListener('mouseleave', onLeave);
            el.removeEventListener('pointerenter', onEnter as EventListener);
            el.removeEventListener('pointerleave', onLeave as EventListener);
            el.removeEventListener('pointerdown', onPointerDown as EventListener);
            window.removeEventListener('pointermove', onPointerMove as EventListener);
            window.removeEventListener('pointerup', endDrag as EventListener);
            window.removeEventListener('pointercancel', endDrag as EventListener);
        };
    }, [loopedQuotes.length]);

    return <ul className={'quotes'} ref={containerRef}>
        {loopedQuotes.map((quote, idx) => <li key={`quote_${idx}`}><Quote {...quote}/></li>)}
    </ul>;
}
export default QuotesList;