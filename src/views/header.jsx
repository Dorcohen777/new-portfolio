import { Link, useLocation } from 'react-router-dom'

export function Header() {

    return (
        <section className='header-container'>
            <div className='header-content-container'>
                <h1>Dor.c</h1>
                <ul className='links-container'>
                    <li><a href='.about'>About</a></li>
                    <li><a href='.about'>Download CV</a></li>
                    <li><a href='.about'>Projects</a></li>
                </ul>
            </div>
        </section>
    )
}