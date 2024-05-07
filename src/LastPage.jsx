import React from 'react';
import topImage from './harding.png';


function LastPage() {
  return (
    <div>
    <div className="flex">
      
      {/* Left section */}
      <div className="w-2/5">
        <div className="relative" style={{ width: '700px', height: '550px', position: 'relative' }}>
          {/* Top Image */}
          <img
            src={topImage}
            alt="Top Image"
            
          />
         
          
          
        </div>
      </div>

      {/* Right section */}
      <div className="w-3/5 px-2 ml-8">
      <h1 className="text-4xl font-medium mt-8 mb-4" style={{ color: "#1F2026", fontFamily: "Inter, sans-serif", fontSize: "55px", lineHeight: "1.1" }}>
  Intuitive dashboard,<br />
  which streamlines<br />
  analytics
</h1>


        <p className=" text-lg mb-4" style={{fontSize:"24px", lineHeight: "1.2", fontWeight:500}}>
          Supertrainer Empowering the Future of the the<br />
          Future of Education. We Future of understand the<br />
          understand the transformative Future of understand the<br />
          potential of education. Future of understand the<br />
          Interactive features, multimediaFuture of une<br />
          content effectively. 
        
          <br />
          Our Learning Management Future of Management <br />
          System (LMS) is designed to Future of Management <br />
          provide a seamless and Management Future of theh<br />
          efficient learning experience.
         
        </p>
        <hr className="my-8 border-t border-gray-500" />
        <p className="text-gray-500" style={{  fontSize: '21px', fontWeight: 680, textAlign: 'left', color: '#767A85' }}>
  Whether you are an educator Influencer, or institution looking,<br />
  Influencer, or institution looking Influencer, or institution looking<br />
  for an advanced educational platform, you're in the right place.<br />
</p>


      </div>

      
    </div>

    <div className="flex justify-center mt-8 ml-64" style={{ marginLeft: '480px' }}>
  <button className="border border-gray-500 rounded-full py-2 px-3 mx-1"><b>Education Hub</b></button>
  <button className="border border-gray-500 rounded-full py-2 px-3 mx-1"><b>Users Hub</b></button>
  <button className="border border-gray-500 rounded-full py-2 px-3 mx-1"><b>CRM Hub</b></button>
  <button className="border border-gray-500 rounded-full py-2 px-3 mx-1"><b>Content Hub</b></button>
  <button className="border border-gray-500 rounded-full py-2 px-3 mx-1"><b>Financial Hub</b></button>
  <button className="border border-gray-500 rounded-full py-2 px-3 mx-1"><b>Marketing Hub</b></button>
</div>


    </div>
  );
}

export default LastPage;
