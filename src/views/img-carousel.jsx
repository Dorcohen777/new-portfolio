import { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

export function ImgCarousel({ img }) {
   const [slide, setSlide] = useState(0)

   const nextSlide = () => {
      setSlide(slide === img.length - 1 ? 0 : slide + 1)
   }

   const prevSlide = () => {
      setSlide(slide === 0 ? img.length - 1 : slide - 1)
   }


   return (
      <section className='carousel-container'>
         <BsArrowLeftCircleFill
            className='arrow arrow-left'
            onClick={prevSlide}
         />
         {img.map((item, idx) => {
            return (
               <img
                  src={item}
                  key={idx}
                  className={slide === idx ? 'slide' : 'slide-hidden'}
               />
            )
         })}
         <BsArrowRightCircleFill
            className='arrow arrow-right'
            onClick={nextSlide}
         />
         <span className='indicators'>
            {img.map((_, idx) => {
               return (
                  <button
                     className={
                        slide === idx
                           ? 'indicator'
                           : 'indicator indicator-inactive'
                     }
                     key={idx}
                     onClick={null}
                  ></button>
               )
            })}
         </span>
      </section>
   )
}