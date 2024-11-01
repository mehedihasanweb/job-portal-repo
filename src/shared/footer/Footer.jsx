import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="md:max-w-7xl  md:mx-auto md:py-12 ">
      <div className="md:flex md:flex-col gap-6 p-6 md:p-0">
        <div className="flex flex-wrap justify-between items-center text-white ">
          <div>
            <h2 className="text-4xl font-bold">CareerHub</h2>
            <p className="text-gray-400 my-6">
              There are many variations of passages of Lorem Ipsum <br />, but
              the majority have suffered alteration in some form.
            </p>
            <div className="flex items-center gap-3">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold pb-4">Company</h2>
            <ul>
              <li className="text-gray-400">About Us</li>
              <li className="text-gray-400">Work</li>
              <li className="text-gray-400">Latest News</li>
              <li className="text-gray-400">Career</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold pb-4">Product</h2>
            <ul>
              <li className="text-gray-400">Prototype</li>
              <li className="text-gray-400">Plans & Pricing</li>
              <li className="text-gray-400">Customers</li>
              <li className="text-gray-400">Integrations</li>
            </ul>
          </div>
          <div>
            <h2 className="pb-4 text-2xl font-bold">Support</h2>
            <ul>
              <li className="text-gray-400">Help Desk</li>
              <li className="text-gray-400">Sales</li>
              <li className="text-gray-400">Become a partner</li>
              <li className="text-gray-400">Developers</li>
            </ul>
          </div>
          <div>
            <h2 className="pb-4 text-2xl font-bold">Contact</h2>
            <ul>
              <li className="text-gray-400">524 Broadway , NYC</li>
              <li className="text-gray-400">+1 777 - 978 - 5570 </li>
              <li className="text-[#191919]">aaa</li>
              <li className="text-[#191919]">aaa</li>
            </ul>
          </div>
        </div>
        <hr className="my-6" />
        <div className="flex justify-between items-center text-white">
          <p className="text-gray-400">@2023 CareerHub. All Rights Reserved</p>
          <p className="text-gray-400">Powered by CareerHub</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
