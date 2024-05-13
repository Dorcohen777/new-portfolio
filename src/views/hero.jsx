import heroImg from '../assets/imgs/hero-img-nobg.png'

export function Hero() {
    return (
        <section className="hero-container">
            <div className="my-bio-container">
                <div className='my-bio-content'>
                    <h2 className='hero-title'>Hi, I'm Dor a Full Stack Web Developer</h2>
                    <p className='hero-info'></p>
                </div>
                <div className="hero-img-container"> 
                    <img src={heroImg} className='hero-img' />
                </div>
                <div className='scroll-container'>
                    <div className="dot"></div>
                </div>
            </div>
        </section>
    )
}