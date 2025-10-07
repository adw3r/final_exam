import './style.scss'
import {useEffect} from 'react'
import Layout from "@/App/components/Layout";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Recent from "./Recent";
import Reviews from "./Reviews";
import Experience from "./Experience";
import Approach from "./Approach";
import Outro from "./Outro";
import ScrollToTopButton from "@/App/components/ScrollToTopButton";

export default function IndexPage() {
    useEffect(() => {
        document.body.classList.add('index-snap')
        return () => document.body.classList.remove('index-snap')
    }, [])
    return (
        <Layout>
            <main>
                <Hero/>
                <Portfolio/>
                <Recent/>
                <Reviews/>
                <Experience/>
                <Approach/>
                <Outro/>
            </main>
            <ScrollToTopButton/>
        </Layout>

    )
}
