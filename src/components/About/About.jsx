import Header from '../Header/Header';
import './About.css';


export default function About() {
  return (
    <>
        <section id='about'>

            <Header title={'ABOUT'}  secondary/>

            <article className='container text-white fs-5'>
                <div className="row gy-5">
                    <div className="col-12 col-lg-4 offset-lg-2">
                        <div className='px-4'>
                            <p className='mb-0'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className='px-4'>
                            <p className="mb-0">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                        </div>
                    </div>
                </div>

            </article>

        </section>
    </>
  )
}

