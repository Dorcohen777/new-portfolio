import me from '../assets/imgs/me1op.jpg'

//splt js 
import splitFunction from 'spltjs';
import anime from 'animejs';



// icons
import { FaPhoneSquare } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useEffect, useRef, useState } from 'react';

export function About() {
    const revealRef = useRef();
    const gridRef = useRef();
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        // Grid animation setup
        const gridElements = gridRef.current.children;
        anime({
            targets: gridElements,
            scale: [
                { value: .1, easing: 'easeOutSine', duration: 500 },
                { value: 1, easing: 'easeInOutQuad', duration: 1000 }
            ],
            delay: anime.stagger(200, { grid: [14, 5], from: 'center' }),
            loop: false,

        });

        // IntersectionObserver setup
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated) {
                    splitFunction({ target: '.splt', reveal: true });
                    anime({
                        targets: '.reveal',
                        translateY: [100, 0],
                        opacity: [0, 1],
                        delay: anime.stagger(30),
                        easing: 'easeOutExpo'
                    });
                    setHasAnimated(true); // Set the state to true after the animation
                }
            });
        }, { threshold: 0 });

        if (revealRef.current) {
            observer.observe(revealRef.current);
        }

        // Cleanup function to disconnect the observer
        return () => {
            if (revealRef.current) {
                observer.disconnect();
            }
        };
    }, [hasAnimated]);


    return (

        <section className="main-layout">

            <div className="about-container">

                <div className='about-info-container'>

                    <div className="about-me-content">
                        <h1 className='splt' ref={revealRef}>Who Am I?</h1>
                        <p >Nice to meet you :) i'm Dor a passionate full-stack web developer, i love what i do and i'm always trying to improve.</p> <br />
                        <p >I love to work, have good communication skills, attention to detail, and good problem-solving and technical skills</p> <br />
                        <p className='contact-title'>Contact Information</p>
                        <div className='contact-information-container' >
                            <p><FaPhoneSquare /> 053-7171650 </p>
                            <p><MdOutlineAlternateEmail /> dorcohen1337@gmail.com</p>
                        </div>
                    </div>

                    {/* <div className='blub'></div> */}
                </div>

                <div className="about-img-container">
                    <img src={me} className='my-image' />

                    <div className='grid-container' ref={gridRef}>
                        {[...Array(14 * 5)].map((_, i) => <div key={i} className='grid-element' />)}
                    </div>
                </div>


            </div>
        </section>
    )
}