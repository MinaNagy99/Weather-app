import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return <>
<nav className="navbar navbar-expand-lg bg-dark ">
  <div className="container-fluid px-5 ">
  <i className="fa-solid fa-smog fs-1 text-info"></i>

    <a className="navbar-brand fs-3 text-white" to={'/'}>Weather</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <Link className="nav-link text-white fs-4 pe-4" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white pe-4 fs-4" to={'/about'}>About</Link>
        </li>
   
    
      </ul>
      
    </div>
  </div>
</nav>  
  </>
}
