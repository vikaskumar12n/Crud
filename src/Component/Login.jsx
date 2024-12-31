import React from 'react'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
   <>
    <div className='row'>
        <div className='col-sm-12 mx-auto border border-4  rounded-3'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className='form-control bg-dark text-light  text-center ' style={{textDecoration:"none"}} to='/AdminView' >Admin</Link>
        </li>
        <li className="nav-item">
        <Link className='form-control bg-dark  text-light ' to='/StaffView'  style={{textDecoration:"none"}}  >Staff</Link>
        </li>
        <li className="nav-item">
        <Link className='form-control bg-dark text-light   ' to='/UserView'  style={{textDecoration:"none"}} >User</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
        </div>
    </div>
   </>
  )
}

export default Login
