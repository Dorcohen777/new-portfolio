import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


console.log('gsap live')

const tl = gsap.timeline()


tl.from('.about-title', {
    y: '50px',
    opacity: 0,
    scrollTrigger: {
        trigger:'.about',
        start: 'top top',
        end: '+=300',
    }
})