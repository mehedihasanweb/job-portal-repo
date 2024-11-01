import Button from "../../shared/button/Button";
import image from "../../../public/assets/images/user.png";

const Banner = () => {
  return (
    <div className="pt-6 md:max-w-7xl md:mx-auto">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center ">
        <div className=" w-full">
          <h2 className="text-6xl font-bold  leading-[68px]">
            One Step <br /> <span>Closer To Your</span> <br />{" "}
            <span className="text-[#808efe]">Dream Job</span>
          </h2>
          <p className="text-gray-400 md:py-8 py-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <Button title="Get Started" />
        </div>
        <div className=" w-full pt-6 md:pt-0">
          <img src={image} alt="user_image" className="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
