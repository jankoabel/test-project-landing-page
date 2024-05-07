import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className="px-12 py-8 bg-gray-100" style={{ backgroundColor: "#F4F4F4" }}>

      <h1 className="text-5xl font-medium mb-6 ml-12">Transforming Education, <br /> Empowering Minds</h1>
      <br /><br />
      <div className="flex items-center ml-12">
  <div className="w-7 h-7 bg-blue-300 flex items-center justify-center rounded-full">
    <FaPhoneAlt className=" w-3 h-3" />
  </div>
  <div className="ml-2">+251935301992</div>
  <div className="ml-4 mr-8"></div> {/* Adding a gap */}
  <div className="w-7 h-7 bg-green-300 flex items-center justify-center rounded-full">
    <FaEnvelope className=" w-3 h-3" />
  </div>
  <div className="ml-2">abrhamwube1@gmai.com</div>
</div>
<br /><br /><br />
      
<hr className="my-8 border-t" style={{ borderWidth: '2px' }} />

      
      <div className="flex justify-between">
        <div>@Abraham, All rights reserved</div>
        <div className="text-bold">
          <a href="/terms" className="mr-6">Terms and Conditions</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
