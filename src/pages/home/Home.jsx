import Banner from "../../components/banner/Banner";
import Category from "../../components/categoryList/Category";
import Features from "../../components/features/Features";

const Home = () => {
  return (
    <div>
      <div className=" bg-[#f9f9ff] p-6 md:p-0">
        <Banner />
      </div>
      <div className="md:max-w-7xl md:mx-auto bg-[#ffffff] p-6 md:p-0">
        <Category />
      </div>
      <div className="md:max-w-7xl md:mx-auto bg-[#ffffff] p-6 md:p-0">
        <Features />
      </div>
    </div>
  );
};

export default Home;
