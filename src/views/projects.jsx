import { useEffect, useState } from 'react'
import { mainService } from '../services/main-service'

// cmp
import { ImgCarousel } from './img-carousel'

//gsap
import {GsapAnimation} from '../views/gsap'

export function Projects() {
   const [projects, setProjects] = useState([]) // Initialize projects as an empty array

   useEffect(() => {
      setProjects(mainService.projectsData)
   }, [])

   function addSpace(desc) {
      const descriptionWithLineBreaks = desc.split('.').join('.<br/> <br/>')
      return (
         <span
            dangerouslySetInnerHTML={{ __html: descriptionWithLineBreaks }}
         />
      )
   }

   if (projects.length === 0) return <div>loading...</div> // Check the length of projects array instead of the truthiness

   return (
      <section className='projects-section main-layout' id='projects'>
         <div className='fade-up'>
            <h2 className='projects-title underline-style'> Projects. </h2>
            <p className='project-note'>Note that there are more projects I have developed, these are just a few.</p>
         </div>
         <div className='projects-container' id='projects'>
            {projects.map((project, idx) => {
               return (
                  <article key={idx} className='project-card'>
                     <div className='project-info'>
                        <p className='project-tag'>{project.tag}</p>
                        <h2>{project.title}</h2>
                        <p className='project-desc'>
                           {addSpace(project.description)}
                        </p>
                        <div className='project-btns-container'>
                           <a href={project.links[0]} target='_blank'>
                              <button className='try-live-btn pointer hover-effect'>
                                 Try Live
                              </button>
                           </a>
                           {project.links[1] && (
                              <a href={project.links[1]} target='_blank'>
                                 <button className='github-btn pointer hover-effect'>
                                    GitHub
                                 </button>
                              </a>
                           )}
                           {project.links[2] && (
                              <a href={project.links[2]} target='_blank'>
                                 <button className='youtube-btn pointer hover-effect'>
                                    Watch In Youtube
                                 </button>
                              </a>
                           )}
                        </div>
                        <div className='tech-container'>
                           {project.tech.map((skill, idx) => {
                              return (
                                 <div
                                    className='tech-inner-container'
                                    key={idx}
                                 >
                                    {skill === 'react' && (
                                       <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' />
                                    )}
                                    {skill === 'html' && (
                                       <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg' />
                                    )}
                                    {skill === 'javascript' && (
                                       <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' />
                                    )}
                                    {skill === 'mongodb' && (
                                       <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg' />
                                    )}
                                    {skill === 'sass' && (
                                       <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' />
                                    )}
                                    {skill === 'css' && (
                                       <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" />
                                    )}
                                    {skill === 'wordpress' && (
                                       <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" />
                                    )}
                                    {skill === 'nodejs' && (
                                       <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg' />
                                    )}
                                    {skill === 'php' && (
                                       <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' />
                                    )}
                                 </div>
                              )
                           })}
                        </div>
                     </div>
                     <div className='project-images'>
                        <ImgCarousel img={project.imgs} />
                     </div>

                  </article>

               )
            })}

         </div>
      </section>
   )
}