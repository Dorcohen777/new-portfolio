import { Routes, Route } from 'react-router-dom'

// cmps
import { Header } from "./views/header";
import { Hero } from './views/hero';

export function RootCmp() {

    return (
        <div>
            <section className="hero-section">
                <Header />
                <main >
                    <Routes>
                        <Route path='/new-portfolio' element={<Hero />} />
                    </Routes>
                </main>
            </section>
        </div>
    )
}