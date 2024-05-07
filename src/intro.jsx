import React from 'react';
import { FiUser, FiSettings, FiHelpCircle } from 'react-icons/fi'; // Importing required icons from react-icons
import image from './circle.png';
import rightImage from './larg.png'; // Importing the image for the right section

function Intro() {
  return (
    <div className="flex">
      {/* Left section */}
      <div className="w-1/2 ml-8">
        <div className="flex items-center mt-10 ml-10 relative" style={{ marginTop: "-30px" }}> {/* Adjusted top margin and left margin */}
          <img src={image} alt="Circular Image" className="w-1/2 h-1/3 rounded-full mt-3" />
          <div className="ml-4 relative z-10" style={{ marginLeft: "-250px", marginTop: "-40px" }}> {/* Adjusted margins */}
            <h4 className="mt-0 mr-3 text-2xl">Feature</h4> {/* Adjusted top margin */}
            <h1 className="text-5xl">
              A Platform for Super <br /> {/* Line break */}
              Instructors  & <br /> {/* Line break */}
              & Organizations.
            </h1>
          </div>
        </div>

        {/* Three divs arranged vertically */}
        <div style={{ backgroundColor: "#F9F9F9", padding: "20px", height: "700px", borderRadius: "10px" }}>

        <div className="mt-8 ml-24" >

          {/* First div */}
          <div className="flex items-center mt-4">
          <div className="bg-green-200 mr-6 rounded-full h-12 w-12 flex items-center justify-center">
  <FiUser size={24} className="text-red-500" />
</div>


            <div>
              <h2 className="text-xl font-bold">First Section</h2>
              <p className="text-lg">
                This is the content of the first section Lorem ipsum dolor sit <br/>
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,<br/>
                consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <br/>
          <hr className="my-4 border-gray-300"/>
          
          <br/>

          {/* Second div */}
          <div className="flex items-center mt-4">
          <div className="bg-green-200 rounded-full h-12 w-12 mr-6 flex items-center justify-center">
  <FiSettings size={24} className="text-red-500" />
</div>
            <div>
              <h2 className="text-xl font-bold">Second Section</h2>
              <p className="text-lg">
                This is the content of the second section Lorem ipsum dolor <br/>
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,<br/>
                consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <br/>
          <hr className="my-4 border-gray-300"/>
          <br/>
          {/* Third div */}
          <div className="flex items-center mt-4">
          <div className="bg-green-200 rounded-full h-12 w-12 flex items-center justify-center mr-6">
  <FiHelpCircle size={24} className="text-red-500" />
</div>

            <div>
              <h2 className="text-xl font-bold">Third Section</h2>
              <p className="text-lg">
                This is the content of the third section Lorem ipsum dolor sit<br/>
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,<br/>
                consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Right section */}
      <div className="w-1/2 mt-24" style={{ backgroundColor: "#F9F9F9" }}>
  <img src={rightImage} alt="Right Image" className="w-full " style={{ height: "780px" }} />
</div>
<br /><br />

    </div>
  );
}

export default Intro;
