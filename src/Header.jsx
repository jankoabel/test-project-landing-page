import React from 'react'
import img1 from "./TET1.png";
import img2 from "./tet2.PNG";
import { FaUser, FaCar, FaBook } from "react-icons/fa";
const Header = () => {
  return (
    <div className="bg-white">
      <header className="bg-white text-black py-4">
        <nav className="container mx-auto flex items-center justify-between">
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
              className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-600 font-medium"
            >
              Join Now
            </a>
          </div>
        </nav>
      </header>
      <div className="px-30 py-10 ml-32 max-w-400px">
        <h1 className="text-7xl font-bold">
          Unleash the Feature <br />{" "}
          <span className="italic">of Education</span>
        </h1>
        <br />
        <div className="flex items-start mt-6">
          <div>
            <p className="text-lg mt-6 font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> nunc
              lacinia, vel pretium felis mollis. Ut quis hhhe
              <br /> bibendum magna.
            </p>
          </div>
          <div
            className="mt-64"
            style={{ position: "absolute", left: "0", top: "50%" }}
          >
            <div style={{ height: "280px" }}>
              <img
                src={img2}
                alt="Government of Austria Scholarships"
                style={{ width: "700px", height: "100%" }}
              />
            </div>
          </div>

          <div className="ml-auto" style={{ position: "absolute", right: "0" }}>
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
            <div className="flex items-center">
              <div>
                ━━━━━━━━━━━━━━━━━━━━━━➤
                <p className=" text-black">
                  Hello wow hello wow helloow helloow hello
                </p>
              </div>
            </div>
            <div
              className="ml-auto flex items-center"
              style={{ marginInlineStart: "50px" }}
            >
              <div className="relative -ml-2" style={{ zIndex: 3 }}>
                <div className="w-10 h-10 bg-white border border-black flex items-center justify-center rounded-full">
                  <FaUser className="w-6 h-6 text-black absolute" />
                </div>
              </div>
              <div
                className="relative -ml-2"
                style={{ marginLeft: "-5px", zIndex: 2 }}
              >
                <div className="w-10 h-10 bg-white border border-black flex items-center justify-center rounded-full">
                  <FaCar className="w-6 h-6 text-black absolute" />
                </div>
              </div>
              <div
                className="relative -ml-2"
                style={{ marginLeft: "-5px", zIndex: 1 }}
              >
                <div className="w-10 h-10 bg-white border border-black flex items-center justify-center rounded-full">
                  <FaBook className="w-6 h-6 text-black absolute" />
                </div>
              </div>
              <div className="relative -ml-2" style={{ marginLeft: "-5px" }}>
                <div className="w-10 h-10 bg-white border border-black flex items-center justify-center rounded-full">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs text-black">
                    820+
                  </div>
                </div>
              </div>
            </div>
            
           
          </div>
          <div className="mt-12">
  <a
    href="/signup"
    className="bg-green-800 text-white px-6 py-3 rounded hover:bg-green-600 font-medium w-48 h-12"
  >
    Signup Now
  </a>
</div>

        </div>
      </div>
    </div>
  )
}

export default Header