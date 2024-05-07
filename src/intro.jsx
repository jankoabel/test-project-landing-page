import React from 'react';
import image from './circle.png';
import rightImage from './larg.png'; // Importing the image for the right section
import icon1 from './ico1.png';
import icon2 from './ico2.png';
import icon3 from './ico3.png';

function Intro() {
  return (
    <div className="flex">
      {/* Left section */}
      <div className="w-1/2 ml-8">
        <div className="flex items-center mt-10 ml-10 relative" style={{ marginTop: "-30px" }}> {/* Adjusted top margin and left margin */}
          <img src={image} alt="Circular Image" className="w-1/2 h-1/3 rounded-full mt-3" />
          <div className="ml-4 relative z-10" style={{ marginLeft: "-250px", marginTop: "-40px" }}> {/* Adjusted margins */}
            <h4 className="mt-0 mr-3 text-2xl" style={{ color: '#767A85' }} >Feature</h4> {/* Adjusted top margin */}
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
              <div className=" mr-6 rounded-full h-12 w-12 flex items-center justify-center">
                <img src={icon1} alt="Icon 1" className="h-12 w-12" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Education Hub</h2>
                <p className="text-lg" style={{ color: '#767A85' }}>
    You can add <strong>Courses</strong>: Manage Courses, Live Classes, Text <br/>
    Courses, New Course, Course Bundles, Upcoming Bundles,<br/>
    Course Notices, <strong>Categories, Filters, Reviews</strong>.
</p>

              </div>
            </div>
            <br/>
            <hr className="my-4 border-gray-300"/>
            
            <br/>

            {/* Second div */}
            <div className="flex items-center mt-4" style={{ color: '1F2026' }}>
              <div className=" rounded-full h-12 w-12 mr-6 flex items-center justify-center">
                <img src={icon2} alt="Icon 2" className="h-12 w-12" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2" style={{ color: '1F2026' }}>Users & Access Hub</h2>
                <p className="text-lg" style={{ color: '#767A85' }}>
                  Add and manage staff, students, and more. Control access,  <br/>
                  handle account requests, and create user roles and groups,<br/>
                  Explore featured and recommended topics in one easy-to-<br/>
                  use dashboard.
                </p>
              </div>
            </div>
            <br/>
            <hr className="my-4 border-gray-300"/>
            <br/>
            {/* Third div */}
            <div className="flex items-center mt-4">
              <div className=" rounded-full h-12 w-12 flex items-center justify-center mr-6">
                <img src={icon3} alt="Icon 3" className="h-12 w-12" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2" style={{ color: '1F2026' }}>Customer Relationship Management</h2>
                <p className="text-lg" style={{ color: '#767A85' }}>
    Manage support tickets, course-related queries, comments,<br/>
    and reports. Stay connected with contact messages. <br/>
    noticeboard updates, and notifications-all in one place.
</p>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="w-1/2 mt-24" style={{ backgroundColor: "#F9F9F9" }}>
        <img src={rightImage} alt="Right Image" className="w-full ml-16 " style={{ height: "780px" }} />
      </div>
      <br /><br />

    </div>
  );
}

export default Intro;
