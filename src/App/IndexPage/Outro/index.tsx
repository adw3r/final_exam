import './style.scss'
import Button from "@/App/components/Button/Button";


export default function Outro() {
    return (
        <section className={'outro container'}>
            <h2>Ready to take <span className='pink'>your</span> digital presence to the next level?</h2>
            <p>Reach out to me today and let's discuss how I can help you achieve your goals.</p>
            <Button text='Contact Me Now'/>
        </section>
    )
}