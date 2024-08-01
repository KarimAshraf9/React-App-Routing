import './Contact.css'
import Header from "../Header/Header";

export default function Contact() {
  return (
    <>

        <section id='contact'>

            <Header title={'CONTACT ME'}/>

            <div className='container'>
                <div className="row">
                    <div className="col-12 col-lg-8 offset-lg-2">
                        <form>
                            <input type="text" className="form-control form-control-lg" placeholder="Name" required/>
                            <input type="email" className="form-control form-control-lg mt-4" placeholder="Email Address" required/>
                            <input type="tel" className="form-control form-control-lg my-4" placeholder="Phone Number" required/>
                            <textarea className="form-control ps-3" placeholder='Message' rows="5"></textarea>
                            <button className='mt-3 text-white rounded-3 fs-3'>Send</button>
                        </form>
                    </div>
                </div>
            </div>


        </section>
    </>
  )
}
