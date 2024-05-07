import React from 'react';
import topImage from './out.png';
import bottomImage from './bot.png';
import insideImage from './inside.png';

function LastPage() {
  return (
    <div>
    <div className="flex">
      
      {/* Left section */}
      <div className="w-1/2">
        <div className="relative" style={{ width: '700px', height: '550px', position: 'relative' }}>
          {/* Top Image */}
          <img
            src={topImage}
            alt="Top Image"
            style={{ width: '100%', height: '100%', zIndex: 4 }}
          />
          {/* Inside Image */}
          <div className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 1000 }}>
            <img
              src={insideImage}
              alt="Inside Image"
              style={{ position: 'absolute', top: '8px', left: '0px', width: '550px', height: '500px' }}
            />
          </div>
          {/* Bottom Image */}
          <img
            src={bottomImage}
            alt="Bottom Image"
            style={{ position: 'absolute', left: 0, bottom: '-160px', width: '300px', height: '300px', zIndex: 2 }}
          />
        </div>
      </div>

      {/* Right section */}
      <div className="w-1/2 px-8 ml-16">
        <h1 className="text-4xl font-medium mt-8 mb-4">
          Intuitive dashboard,<br />
          which streamlines<br />
          analytics
        </h1>
        <p className="font-bold text-lg mb-4">
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
        <p className="text-gray-500" style={{ fontFamily: 'Inter', fontSize: '19px', fontWeight: 680, textAlign: 'left' }}>
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
