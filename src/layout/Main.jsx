import { Outlet } from "react-router-dom";
import Header from "../shared/header/Header";
import Footer from "../shared/footer/Footer";

const Main = () => {
  return (
    <div className="">
      <div className="bg-[#f9f9ff] p-6 md:p-0">
        <Header />
      </div>
      <Outlet />
      <div className="bg-[#191919] ">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
