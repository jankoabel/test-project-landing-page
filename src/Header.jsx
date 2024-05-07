import React from 'react'
import img1 from "./TET1.png";
import img2 from "./montain.png";
import hard from './hard.png'
import done from './done.png'

import { FaUser, FaCar, FaBook } from "react-icons/fa";
const Header = () => {
  return (
    <div className="bg-white">
      <header className="bg-white text-black py-4">
        <nav className="container mx-auto flex items-center justify-between mt-3">
          <div className="w-30%"></div>{" "}
          {/* Empty div to push the first link to start after 30% width */}
          <ul className="flex space-x-8 font-medium">
            <li>
              <a href="/what-we-do" className="hover:underline">
                What We Do
              </a>
            </li>
            <li>
              <a href="/testimonials" className="hover:underline">
                Testimonials
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="/client-stories" className="hover:underline">
                Client Stories
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
          <div>
            {" "}
            {/* Empty div to push the "Join Us" link to the right */}
            <a
  href="/join-us"
  className="bg-green-800 text-white px-4 py-2 h-8 rounded hover:bg-green-600 font-medium"
  style={{ backgroundColor: "#197A40" }}
>
  Join Now
</a>

          </div>
        </nav>
      </header>
      <br /><br/>
      <div className="px-30 py-10 ml-24 max-w-400px">
      <h1 className="text-7xl font-semibold" style={{ color: "#1F2026" }}>
  Unleash the Feature <br />{" "}
  of  {" "}
  <span style={{ color: "#1F2026", fontWeight: "460",fontFamily: 'Playfair Display, serif',textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" , fontStyle: 'italic', fontWeight: 550, transform: 'skewY(-6deg)' }}>
   Education
</span>

</h1>

        <br />
        <div className="flex items-start mt-6">
        
            <img src={hard} alt="Hard Image" />
          <div
            className="mt-64"
            style={{ position: "absolute", left: "0", top: "50%" }}
          >
            <div style={{ height: "230px" }} className='mt-24'>
              <img
                src={img2}
                alt="Government of Austria Scholarships"
                style={{ width: "740px", height: "100%" }}
              />
            </div>
          </div>

          <div className="ml-auto " style={{ position: "absolute", right: "0" }}>
            <div style={{ height: "530px" }}>
              <img
                src={img1}
                alt="Government of Austria Scholarships"
                style={{ width: "700px", height: "100%" }}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center mt-6">
            
         
            
           
          </div>
          
        </div>
        <br /><br /><br /><br></br> <br /><br></br><br /><br></br><br /><br></br>
        {/* Include the 'done' image here */}
        <div className="mt-10">
          <img src={done} alt="Done Image" />
        </div>
      </div>
    </div>
  )
}

export default Header