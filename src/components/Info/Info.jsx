import './Info.css'

export default function Info() {
  return (
    <>
        <section id="Info" className='text-white'>

            <div className="container">

                <div className="row gy-5">

                    <div className="col-12 col-lg-4">

                        <div className="InfoLocation text-center">
                            <h4 className='mb-3 fs-3 fw-bold'>LOCATION</h4>
                            <p className='mb-0'>2215 John Daniel Drive<br />Clark, MO 65243</p>
                        </div>

                    </div>

                    <div className="col-12 col-lg-4">

                        <div className="InfoSocial text-center">
                            <h4 className='mb-5 fs-3 fw-bold'>AROUND THE WEB</h4>
                            <ul className='list-unstyled d-flex justify-content-center mb-0'>
                                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li className='ms-3'><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                <li className='mx-3'><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                            </ul>
                        </div>

                    </div>


                    <div className="col-12 col-lg-4">

                        <div className="InfoFreelance text-center">
                            <h4 className='mb-3 fs-3 fw-bold'>ABOUT FREELANCER</h4>
                            <p className='fw-bold mb-0'>Freelance is a free to use, MIT licensed Bootstrap theme created by Karim Ashraf</p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    </>
  )
}
