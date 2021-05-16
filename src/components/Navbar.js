import React,{useState} from 'react'
import {Link} from 'react-router-dom'


import './Navbar.css'

function Navbar()
{ const [click, setclick] = useState(false)
 const handle=()=>
{
  setclick(!click)
}
const pHandler=()=>
{
    setclick(false)
}

    return (   
    <nav className="navbar">
       
<h1 className="Tlogo" onClick={pHandler}>
    Travel  <i className='fas fa-spa'></i>
</h1>
        <div className="menu-ico" onClick={handle}>
            <i className={click? 'fas fa-times':'fas fa-bars'}></i>
        </div>
       
        <ul className={click ? 'nav-men act':'nav-men'}>
            <li></li>
             <li className="po"> <Link to="/" className="nav-link" onClick={pHandler}>
              Home
            </Link></li>
            <li className="po"> <Link to="/service" className="nav-link " onClick={pHandler}>
              Services
            </Link></li>
            <li className="po"> <Link to="/product" className="nav-link" onClick={pHandler}>
             Products
            </Link></li>
            <li className="po"> <Link to="/signup" className="nav-item-sig" onClick={pHandler}>
             sign-up
            </Link></li>
        </ul>
      <Link to="signup">
      <button className="x">Sign-up</button></Link>
        </nav>    
    
    );
}

export default Navbar