import React from 'react'
import './Footer.css'
import logo_img from '../Footer/logo.png'

const Footer = () => {

  const handleClick = ()=>{
     alert("successfully submit")
  }
  return (
    <>

      <footer>
        <div class="footer-container">
          <div class="footer-logo">
            <h2>Student Query</h2>
            <p>SOLUTIONS OF ALL THE PROBLEMS.</p>
            
          </div>
          <div class="footer-links">
            <div class="platform">
              <h3>Platform</h3>
              <ul>
                <a href="#"><li>How it Works</li></a>
                <a href="#"><li>Checkout</li></a>
              
              </ul>
            </div>
            <div class="learning">
              <h3>Learn</h3>
              <ul>
                <a href="#"><li>Resources</li></a>
                <a href="#"><li>Blog</li></a>
                <a href="#"><li>FAQs</li></a>
              </ul>
            </div>
            <div class="About">
              <h3>About</h3>
              <ul>
                <a href="#"><li>Privacy Policy</li></a>
                <a href="#"><li>Team</li></a>
                <a href="#"><li>Partners</li></a>
                <a href="#"><li>Contact Us</li></a>
              </ul>
            </div>
          </div>
          <div class="footer-contactus">
            <h2>Contact US</h2>
            <button type='submit' onClick={handleClick}>Get in touch</button>
          </div>
        </div>
        <div class="copywright-tag">@copyCopyright Student Query. All rights reserved</div>
      </footer>
    </>
  )
}

export default Footer