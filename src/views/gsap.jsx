import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


export function GsapAnimation() {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'about-title',
                start: '650px',
                end: '+=300',
                markers: true,
            }
        });

        tl.from('.fade-up', {
            y: '50px',
            opacity: 0,
            stagger: 0.1,
            clipPath: 'inset(0 0 0 0)',
        })
    }, [])
}