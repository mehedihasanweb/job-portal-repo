import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [seeAll, setSeeAll] = useState(false);

  useEffect(() => {
    fetch("/data/jobs.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <div className="md:pt-20">
      <h2 className="text-4xl font-bold text-center">Features Jobs</h2>
      <p className="text-gray-400 text-center pt-3">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        {seeAll
          ? features?.map((feature) => (
              <div
                key={feature.id}
                className=" border p-6 rounded-md flex flex-col justify-between items-start"
              >
                <img src={feature?.logo} alt="" />
                <h2 className="text-xl font-bold pt-4">{feature?.job_title}</h2>
                <p className="text-xl text-gray-600 font-semibold py-2">
                  {feature?.company_name}
                </p>
                <div className="flex gap-4 my-2">
                  <button className="text-[#808efe] border border-[#808efe] px-4 py-2 ">
                    Remote
                  </button>
                  <button className="text-[#808efe] border border-[#808efe] px-4 py-2">
                    Onsite
                  </button>
                </div>
                <div className="flex items-center gap-6 my-2">
                  <p className="flex items-center justify-center gap-2 text-gray-500">
                    <FaLocationDot className="text-gray-500 w-6 h-6" /> dhaka
                  </p>
                  <p className="flex items-center justify-center gap-2 text-gray-500">
                    <RiMoneyDollarCircleFill className="text-gray-500 w-6 h-6" />
                    salary : {feature?.salary}
                  </p>
                </div>
                <Link to={`/details/${feature?.id}`}>
                  <button className="px-4 py-3 bg-gradient-to-r from-[#808efe] via-[#8b81ff] to-[#9577ff] text-white rounded-full text-xl font-semibold">
                    View Details
                  </button>
                </Link>
              </div>
            ))
          : features?.slice(0, 4)?.map((feature) => (
              <div
                key={feature.id}
                className=" border p-6 rounded-md flex flex-col justify-between items-start"
              >
                <img src={feature?.logo} alt="" />
                <h2 className="text-xl font-bold pt-4">{feature?.job_title}</h2>
                <p className="text-xl text-gray-600 font-semibold py-2">
                  {feature?.company_name}
                </p>
                <div className="flex gap-4 my-2">
                  <button className="text-[#808efe] border border-[#808efe] px-4 py-2 ">
                    Remote
                  </button>
                  <button className="text-[#808efe] border border-[#808efe] px-4 py-2">
                    Onsite
                  </button>
                </div>
                <div className="flex items-center gap-6 my-2">
                  <p className="flex items-center justify-center gap-2 text-gray-500">
                    <FaLocationDot className="text-gray-500 w-6 h-6" /> dhaka
                  </p>
                  <p className="flex items-center justify-center gap-2 text-gray-500">
                    <RiMoneyDollarCircleFill className="text-gray-500 w-6 h-6" />
                    salary : {feature?.salary}
                  </p>
                </div>
                <Link to={`/details/${feature?.id}`}>
                  <button className="px-4 py-3 bg-gradient-to-r from-[#808efe] via-[#8b81ff] to-[#9577ff] text-white rounded-full text-xl font-semibold">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
      </div>
      <div className="flex justify-center my-8">
        {seeAll ? (
          <button
            onClick={() => setSeeAll(!seeAll)}
            className="px-4 py-3 bg-gradient-to-r from-[#808efe] via-[#8b81ff] to-[#9577ff] text-white rounded-full text-xl font-semibold"
          >
            Less Jobs
          </button>
        ) : (
          <button
            onClick={() => setSeeAll(!seeAll)}
            className="px-4 py-3 bg-gradient-to-r from-[#808efe] via-[#8b81ff] to-[#9577ff] text-white rounded-full text-xl font-semibold"
          >
            See All Jobs
          </button>
        )}
      </div>
    </div>
  );
};

export default Features;
