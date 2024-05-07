import { useState } from 'react';

function FAQPage() {
  const [openPanels, setOpenPanels] = useState([]);

  const togglePanel = (key) => {
    if (openPanels.includes(key)) {
      setOpenPanels(openPanels.filter((item) => item !== key));
    } else {
      setOpenPanels([...openPanels, key]);
    }
  };

  const isPanelOpen = (key) => {
    return openPanels.includes(key);
  };

  return (
    <div className="flex">
      {/* Left section */}
      <div className="w-1/2 pl-12">
        <h1 className="text-4xl font-bold mt-6 mb-6">Supertrainer LMS FAQ's</h1>
        <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Phasellus vel tellus sed urna fermentum vulputate.</p>
        
        
        <div className="flex mt-8">
          <button className="border border-black text-black px-6 py-3 rounded-full mr-12">
            More Questions
          </button>
          <button className=" underline">Contact Us</button>
        </div>
      </div>

      {/* Right section - Accordion */}
      <div className="w-1/2">
        {/* Accordion FAQ Section */}
        <div className="mt-12 ml-12">
          <div className="border-t border-b border-gray-800" style={{marginRight: '30px'}}></div>
          <div className="border-t border-b border-gray-400" style={{marginRight: '30px'}}>
            <div className="flex items-center justify-between cursor-pointer py-4" onClick={() => togglePanel(1)}>
              <h3 className="font-bold">Question 1</h3>
              <span className="ml-auto text-xl font-bold" style={{ marginRight: '10px' }}>{isPanelOpen(1) ? '−' : '+'}</span>
            </div>
            {isPanelOpen(1) && <p className="py-4">Answer 1</p>}
          </div>
          <div className="border-t border-b border-gray-400" style={{marginRight: '30px'}}>
            <div className="flex items-center justify-between cursor-pointer py-4" onClick={() => togglePanel(2)}>
              <h3 className="font-bold">Question 2</h3>
              <span className="ml-auto text-xl font-bold" style={{ marginRight: '10px' }}>{isPanelOpen(2) ? '−' : '+'}</span>
            </div>
            {isPanelOpen(2) && <p className="py-4">Answer 2</p>}
          </div>
          <div className="border-t border-b border-gray-400" style={{marginRight: '30px'}}>
            <div className="flex items-center justify-between cursor-pointer py-4" onClick={() => togglePanel(3)}>
              <h3 className="font-bold">Question 3</h3>
              <span className="ml-auto text-xl font-bold" style={{ marginRight: '10px' }}>{isPanelOpen(3) ? '−' : '+'}</span>
            </div>
            {isPanelOpen(3) && <p className="py-4">Answer 3</p>}
          </div>
          <div className="border-t border-b border-gray-400" style={{marginRight: '30px'}}>
            <div className="flex items-center justify-between cursor-pointer py-4" onClick={() => togglePanel(4)}>
              <h3 className="font-bold">Question 4</h3>
              <span className="ml-auto text-xl font-bold " style={{ marginRight: '10px' }}>{isPanelOpen(4) ? '−' : '+'}</span>
            </div>
            {isPanelOpen(4) && <p className="py-4">Answer 4</p>}
          </div>
          <div className="border-t border-b border-gray-800" style={{marginRight: '30px'}}></div>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
