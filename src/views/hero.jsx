//splt js 
import splitFunction from 'spltjs';
import anime from 'animejs';

import { useEffect, useRef, useState } from 'react';
import heroImg from '../assets/imgs/hero-img-nobg.png'

// views
import { About } from './about'
import { Projects } from './projects'

export function Hero() {
    const revealRef = useRef();
    const [hasHeroAnimated, setHasHeroAnimated] = useState(false);

    useEffect(() => {

        // IntersectionObserver setup
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasHeroAnimated) {
                    splitFunction({ target: '.heroani', reveal: true });
                    anime({
                        targets: '.reveal',
                        translateY: [200, 0],
                        opacity: [0, 1],
                        delay: anime.stagger(10),
                        easing: 'easeOutExpo'
                    });
                    setHasHeroAnimated(true); // Set the state to true after the animation
                }
            });
        }, { threshold: 1 });

        if (revealRef.current) {
            observer.observe(revealRef.current);
        }

        // Cleanup function to disconnect the observer
        return () => {
            if (revealRef.current) {
                observer.disconnect();
            }
        };
    }, [hasHeroAnimated]);
    return (

        <>
            <section className="hero-container">
                <div className="my-bio-container">
                    <div className='my-bio-content'>
                        <h2 className='hero-title heroani' ref={revealRef}>Hi, I'm Dor a Passionate Full Stack Web Developer</h2>
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

            <section>
                <About />
            </section>

            <section>
                <Projects />
            </section>
        </>
    )
}