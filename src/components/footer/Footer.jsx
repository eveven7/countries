import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { FiLinkedin } from 'react-icons/fi'

export const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="top">
          <div className="logo-footer">
            <h2> REIZ TECH HOMEWORK ASSIGNMENT DOCUMENT FOR FRONT-
              END DEVELOPER INTERN POSITION </h2>
          </div>
          <a href="#"><BsFillArrowUpCircleFill className='icon' /></a>
        </div>
        <div class="social-menu">
          <ul>
            <li><a href="https://www.linkedin.com/in/evelinavenckute/" ><FiLinkedin className='ln' /><i class="fab fa-instagram"></i></a></li>
            <h3> Evelina Venckute, 2023</h3>
          </ul>
        </div>
      </div>
    </footer >
  )
}

