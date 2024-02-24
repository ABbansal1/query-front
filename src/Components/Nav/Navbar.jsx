import React from 'react'
import './Navbar.css'
import logo from '../Nav/logo2.png'
const Header = () => {
   
    const fun = ()=>{
      var mob_nav = document.querySelector(".navbar");
      mob_nav.classList.toggle("active");
  
   }
  return (
    
    <>
        <nav class="navbar">
        <div class="left">
            <img src={logo} alt="" />
        </div>
        <div class="right">
            <ul class="list">
            <li><a href="/">home</a></li>
            <li><a href="/users">USERS</a></li>
            <li><a href="/profile">PROFILE</a></li>
            
            <button >
              <a href='/newquery'>Create Query</a>
            </button>
            </ul>
        </div>
        <div class="mobile" onClick={fun}>
            <ion-icon name="menu" class="menu"></ion-icon>
            <ion-icon name="close" class="menu"></ion-icon>
        </div>
    </nav>
    </>
  )
}

export default Header