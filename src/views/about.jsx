import me from '../assets/imgs/me1.jpg'

//splt js 
import splitFunction from 'spltjs';

import anime from 'animejs';


// icons
import { FaPhoneSquare } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useEffect, useRef } from 'react';

export function About() {

    useEffect(() => {
        splitFunction({ target: '.splt', reveal: true });

        anime({
            targets: '.reveal',
            translateY: [100, 0],
            opacity: [0, 1],
            delay: anime.stagger(50),
            easing: 'easeOutExpo'
        });
    }, []);

    return (

        <section className="main-layout">

            <div className="about-container">

                <div className='about-info-container'>

                    <div className="about-me-content">
                        <h1 className='splt'>Who Am I?</h1>
                        <p>Nice to meet you :) i'm Dor a passionate full-stack web developer, i love what i do and i'm always trying to improve.</p> <br />
                        <p>I love to work, have good communication skills, attention to detail, and good problem-solving and technical skills</p> <br />
                        <p>Contact Information :) </p>
                        <div className='contact-information-container'>
                            <p><FaPhoneSquare /> 053-7171650 </p>
                            <p><MdOutlineAlternateEmail /> dorcohen1338@gmail.com</p>
                        </div>
                    </div>

                    {/* <div className='blub'></div> */}
                </div>

                <div className="about-img-container">
                    <img src={me} className='my-image' />
                </div>

            </div>
        </section>
    )
}