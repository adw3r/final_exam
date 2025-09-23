import {ReactNode} from "react";
import Header from "@/App/components/Header";
import Footer from "@/App/components/Footer";

export default function Layout({ children }: { children: ReactNode }) {
    return <>
        <Header/>
        <div className={'page-wrapper'}>
            {children}
        </div>
        <Footer/>
    </>
}