
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg" id="navBar">
            <div className="container">
                <Link to='' className="navbar-brand">START REACT</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                Menu<span className="navbar-toggler-icon navbar-dark"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item special">
                            <NavLink to='portfolio' className="nav-link" aria-current="page" href="#portfolio">PORTFOLIO</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='about' className="nav-link" href="#about">ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='contact' className="nav-link" href="#contact">CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
