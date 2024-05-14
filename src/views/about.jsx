import me from '../assets/imgs/me1.jpg'

export function About() {
    return (

        <section className="main-layout">

            <div className="about-container">

                <div className='about-info-container'>
                    
                    <div className="about-me-content">
                        <h1>Who Am I?</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium nobis iste voluptate beatae est, laboriosam facere explicabo enim totam dicta error, molestias unde delectus ducimus qui porro suscipit repellat omnis.</p>
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