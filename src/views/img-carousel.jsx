import { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

import trell1 from '../assets/imgs/trelluxe/trell1.png'
import trell2 from '../assets/imgs/trelluxe/trell2.png'
import trell3 from '../assets/imgs/trelluxe/trell3.png'

import cripto1 from '../assets/imgs/cripto/cripto1.png'
import cripto2 from '../assets/imgs/cripto/cripto2.png'
import cripto3 from '../assets/imgs/cripto/cripto3.png'

import amazonlp1 from '../assets/imgs/amazonlp/amazonlp1.png'
import amazonlp2 from '../assets/imgs/amazonlp/amazonlp2.png'

import amazon1 from '../assets/imgs/amazon/amazon1.png'
import amazon2 from '../assets/imgs/amazon/amazon2.png'

import appsus1 from '../assets/imgs/appsus/appsus1.png'
import appsus2 from '../assets/imgs/appsus/appsus2.png'
import appsus3 from '../assets/imgs/appsus/appsus3.jpg'

import cemex1 from '../assets/imgs/cemex/cemex1.png'

import medtonru1 from '../assets/imgs/medtonru/medtonru1.png'
import medtonru2 from '../assets/imgs/medtonru/medtonru2.png'

import medtonk1 from '../assets/imgs/medtonk/medtonk1.png'
import medtonk2 from '../assets/imgs/medtonk/medtonk2.png'
import medtonk3 from '../assets/imgs/medtonk/medtonk3.png'

import mine1 from '../assets/imgs/mine/mine1.png'

import trade1 from '../assets/imgs/tradesmart/trade1.png'
import trade2 from '../assets/imgs/tradesmart/trade2.jpg'
import trade3 from '../assets/imgs/tradesmart/trade3.png'

import seekapa1 from '../assets/imgs/seekapa/seekapa1.png'
import seekapa2 from '../assets/imgs/seekapa/seekapa2.png'
import seekapa3 from '../assets/imgs/seekapa/seekapa3.png'


export function ImgCarousel({ img }) {
   const [slide, setSlide] = useState(0);
   const [currImage, setCurrImage] = useState(null);

   useEffect(() => {
      switch (img[slide]) {
         case 'trell1':
            setCurrImage(trell1);
            break;
         case 'trell2':
            setCurrImage(trell2);
            break;
         case 'trell3':
            setCurrImage(trell3);
            break;
         case 'cripto1':
            setCurrImage(cripto1);
            break;
         case 'cripto2':
            setCurrImage(cripto2);
            break;
         case 'cripto3':
            setCurrImage(cripto3);
            break;
         case 'amazonlp1':
            setCurrImage(amazonlp1);
            break;
         case 'amazonlp2':
            setCurrImage(amazonlp2);
            break;
         case 'amazon1':
            setCurrImage(amazon1);
            break;
         case 'amazon2':
            setCurrImage(amazon2);
            break;
         case 'appsus1':
            setCurrImage(appsus1);
            break;
         case 'appsus2':
            setCurrImage(appsus2);
            break;
         case 'appsus3':
            setCurrImage(appsus3);
            break;
         case 'cemex1':
            setCurrImage(cemex1);
            break;
         case 'medtonru1':
            setCurrImage(medtonru1);
            break;
         case 'medtonru2':
            setCurrImage(medtonru2);
            break;
         case 'medtonk1':
            setCurrImage(medtonk1);
            break;
         case 'medtonk2':
            setCurrImage(medtonk2);
            break;
         case 'medtonk3':
            setCurrImage(medtonk3);
            break;
         case 'mine1':
            setCurrImage(mine1);
            break;
         case 'trade1':
            setCurrImage(trade1);
            break;
         case 'trade2':
            setCurrImage(trade2);
            break;
         case 'trade3':
            setCurrImage(trade3);
            break;
         case 'seekapa1':
            setCurrImage(seekapa1);
            break;
         case 'seekapa2':
            setCurrImage(seekapa2);
            break;
         case 'seekapa3':
            setCurrImage(seekapa3);
            break;
         default:
            setCurrImage(null);
            break;
      }
   }, [img, slide]);

   const nextSlide = () => {
      setSlide((slide + 1) % img.length);
   };

   const prevSlide = () => {
      setSlide((slide - 1 + img.length) % img.length);
   };

   return (
      <section className='carousel-container'>
         <BsArrowLeftCircleFill
            className='arrow arrow-left'
            onClick={prevSlide}
         />
         {img.map((_, idx) => (
            <img
               src={currImage}
               key={idx}
               className={slide === idx ? 'slide' : 'slide-hidden'}
            />
         ))}
         <BsArrowRightCircleFill
            className='arrow arrow-right'
            onClick={nextSlide}
         />
         <span className='indicators'>
            {img.map((_, idx) => (
               <button
                  className={slide === idx ? 'indicator' : 'indicator indicator-inactive'}
                  key={idx}
                  onClick={null}
               ></button>
            ))}
         </span>
      </section>
   );
}
