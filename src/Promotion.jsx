import React from 'react';
import h1 from './h1.PNG';
import h2 from './h2.png';
import h3 from './h3.png';
import image from './bla.png';
import quarterCircleImage from './quarter-circle.png';
import  topRightImage from './hola.png'
import innerImage from './last.png'
import arrow from './arrow.png'

function Promotion() {
  return (
    <div className="flex">
      {/* Left section */}
      <div className="w-1/2 px-12 py-8">
        <h1 className="text-6xl font-bold leading-tight">Stay ahead of the<br/> others with our<br/> Advanced LMS</h1>
        <p className="mt-4 mb-8" style={{color:'#878C91', fontSize:'18px'}}>Not convinced yet ? Have a Glimpse into our LMS through this video  and<br />  dive into the ocean of opportunities Supertrainer has for you. Go Check it <br /> out.</p>
        <div className="flex">
        <button className="border border-black bg-black text-white px-6 py-3 rounded-full mr-4 font-bold">
  <span style={{ display: 'inline-block' }}>Schedule Demo</span>
  <span style={{ marginLeft: '32px', display: 'inline-block' }}>
    <img src={arrow} alt="Arrow" style={{ width: '18px', height: '18px' }} />
  </span>
</button>


          <a href="#" className="text-black underline mt-3 ml-6 font-bold">View Knowledge base</a>
        </div>
        <br />
        
        <div className="flex items-center">
          <p className="mt-8 mb-4 mr-10 font-bold">Trusted by the world's <br/>biggest brands</p>
          <img src={h1} alt="Brand 1" className="w-24 h-auto mr-4" />
          <img src={h2} alt="Brand 2" className="w-24 h-auto mr-4" />
          <img src={h3} alt="Brand 3" className="w-24 h-auto" />
        </div>
      </div>

      {/* Right section */}
      <div className="w-1/2">
        <div className="h-full flex flex-col justify-between">
          {/* Top section */}
          <div className="flex justify-between">
          <div className="relative w-1/2 mt-16">
  <img src={quarterCircleImage} alt="Quarter Circle" className="h-4/5 w-auto ml-8" />
  <div className="absolute -top-8 right-10 w-32 h-32">
    <img src={topRightImage} alt="Top Right Image" className="w-full h-full" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16">
      <img src={innerImage} alt="Inner Image" className="w-8 h-8 ml-3" />
    </div>
  </div>
</div>



        <div className="w-1/2 relative mt-16">
  <div className="absolute top-0 left-0 w-3/4 h-4/5 p-6 flex flex-col justify-between rounded-xl" style={{ backgroundColor: '#F0F0F0' }}>
    <div>
      <h1 className="text-6xl font-bold mb-4">230 +</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel.</p>
    </div>
    <hr className="border-t-4 border-black w-2/3 mb-4" />
    
  </div>
</div>

            
          </div>

          {/* Bottom section */}
          <div className="h-1/2  mb-26 flex items-start justify-center  rounded-tl-xl mr-24 ml-8 ">

          
            <img src={image} alt="Course Sales" className='w-full mb-48 -mt-8' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotion;
