import './style.scss'
import Layout from "@/App/components/Layout";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Recent from "./Recent";
import Reviews from "./Reviews";
import Experience from "./Experience";
import Approach from "./Approach";
import Outro from "./Outro";

export default function IndexPage() {
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
        </Layout>
    )
}
