import React, {useState} from 'react'
import './Navbar.css'
import assets from '../../assets/assets'
import { Link }  from 'react-router-dom';

const Navbar = () => {

    const [menu,setMenu] = useState("HOME");
  return (
    <div className='navbar'>
       <img src={assets.logo} alt="" className="logo" />
       <ul className="navbar-menu">
       <Link to='/' onClick={()=>setMenu("HOME")} className={menu==="HOME"?"active":" "}>HOME</Link>
       <a href='#explore-organizations' onClick={()=>setMenu("ORGANIZATIONS")} className={menu==="ORGANIZATIONS"?"active":" "}>ORGANIZATIONS</a>
       <a href='#food-joints' onClick={()=>setMenu("FOOD JOINTS")} className={menu==="FOOD JOINTS"?"active":" "}>FOOD JOINTS</a>
       <a href='#footer' onClick={()=>setMenu("IDEAS")} className={menu==="IDEAS"?"active":" "}>IDEAS</a>
       </ul>
       <div className="navbar-right">
        <img src={assets.search} alt="" className="search"/>
        <div className="navbar-search">
            <img src={assets.cart} alt="" className="cart" />
            <div className="dot"></div>
        </div>
        <button >sign in</button>
       </div>
    </div>
  )
}

export default Navbar
