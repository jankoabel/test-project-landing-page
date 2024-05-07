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
    <div style={{
      backgroundColor: 'white',
      borderRadius: '0.5rem',
     
      padding: '2rem',
      marginLeft: '20px',
      marginRight: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)' /* Adjust the shadow values as needed */
    }}>
      <div className="flex">
        {/* Left section */}
        <div className="w-1/2 pl-12">
        <h1 className="text-4xl font-bold mt-6 mb-6" style={{ fontFamily: 'Plus Jakarta Sans' }}>
  Supertrainer LMS FAQ's
</h1>

          <p className="mb-6"  style={{ fontFamily: 'Plus Jakarta Sans' ,color: '#878C91'}}>Empowering instructors to create, engage, and inspire. <br/>
          The all-in-one LMS for instructors and students who demand the best.</p>
          <div className="flex mt-8">
            <button className="border border-black font-bold text-black px-6 py-3 rounded-full mr-12">
              More Questions
            </button>
            <button className="underline font-bold">Contact Us</button>
          </div>
        </div>

        {/* Right section - Accordion */}
        <div className="w-1/2">
          {/* Accordion FAQ Section */}
          <div className="mt-12 ml-12">
            <div className="border-t border-b border-gray-800" style={{marginRight: '30px'}}></div>
            <div className="border-t border-b border-gray-400" style={{marginRight: '30px'}}>
              <div className="flex items-center justify-between cursor-pointer py-4" onClick={() => togglePanel(1)}>
                <h3 className="font-bold"  style={{ fontFamily: 'Plus Jakarta Sans' }}>What is Education Hub ?</h3>
                <span className="ml-auto text-xl font-bold" style={{ marginRight: '10px' }}>{isPanelOpen(1) ? '−' : '+'}</span>
              </div>
              {isPanelOpen(1) && <p className="py-4"  style={{ fontFamily: 'Plus Jakarta Sans' }}>Add and manage courses, handle enrollments, organize with core zones and filters, and track notices. Stay in the loop with user reviews.</p>}
            </div>
            <div className="border-t border-b border-gray-400" style={{marginRight: '30px'}}>
              <div className="flex items-center justify-between cursor-pointer py-4" onClick={() => togglePanel(2)}>
                <h3 className="font-bold"  style={{ fontFamily: 'Plus Jakarta Sans' }}>What is User & Access Hub ?</h3>
                <span className="ml-auto text-xl font-bold" style={{ marginRight: '10px' }}>{isPanelOpen(2) ? '−' : '+'}</span>
              </div>
              {isPanelOpen(2) && <p className="py-4"  style={{ fontFamily: 'Plus Jakarta Sans' }}>Add and manage courses, handle enrollments, organize with core zones and filters, and track notices. Stay in the loop with user reviews.</p>}
            </div>
            <div className="border-t border-b border-gray-400" style={{marginRight: '30px'}}>
              <div className="flex items-center justify-between cursor-pointer py-4" onClick={() => togglePanel(3)}>
                <h3 className="font-bold"  style={{ fontFamily: 'Plus Jakarta Sans' }}>What is Content Hub ?</h3>
                <span className="ml-auto text-xl font-bold" style={{ marginRight: '10px' }}>{isPanelOpen(3) ? '−' : '+'}</span>
              </div>
              {isPanelOpen(3) && <p className="py-4"  style={{ fontFamily: 'Plus Jakarta Sans' }}>Add and manage courses, handle enrollments, organize with core zones and filters, and track notices. Stay in the loop with user reviews.</p>}
            </div>
            <div className="border-t border-b border-gray-400" style={{marginRight: '30px'}}>
              <div className="flex items-center justify-between cursor-pointer py-4" onClick={() => togglePanel(4)}>
                <h3 className="font-bold"  style={{ fontFamily: 'Plus Jakarta Sans' }}>What is Financial Hub ?</h3>
                <span className="ml-auto text-xl font-bold " style={{ marginRight: '10px' }}>{isPanelOpen(4) ? '−' : '+'}</span>
              </div>
              {isPanelOpen(4) && <p className="py-4"  style={{ fontFamily: 'Plus Jakarta Sans' }}>Add and manage courses, handle enrollments, organize with core zones and filters, and track notices. Stay in the loop with user reviews.</p>}
            </div>
            <div className="border-t border-b border-gray-800" style={{marginRight: '30px'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
