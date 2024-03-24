import React from 'react'
import './Footer.css'
import assets from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <p>
              Want to Make the best with what you have ? <br /> CLICK THE ICON!
            </p>
            <div className="footer-social-icons">
              <a href='https://myfridgefood.com'>
              <img src={assets.dining} alt="" />
              </a>
            </div>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1 908-868-3247</li>
                <li>customersupport@scarletseconds.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright"> CopyRight 2024@ ScarletSeconds.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
