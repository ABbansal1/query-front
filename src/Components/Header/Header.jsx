import React from 'react'
import './Header.css'
import logo1 from '../Header/logo2.png'

const Header = () => {
  return (
    <>
      {/* <div className="nav">
            <img src={logo1} alt="" />
          <div className="right">
                <a href="/login">LOGIN</a>
                <a href="/register">SIGNUP</a>
          </div>
      </div> */}

      <nav class="navbar1">
        <div class="left1">
          <img src={logo1} alt="" />
        </div>
        <div class="right1">
          <ul class="list1">
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Signup</a></li>

          </ul>
        </div>

      </nav>


    </>
  )
}

export default Header