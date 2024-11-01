import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getStoredApplications,
  removeAppliedJobs,
} from "../../utility/localStorage";
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const AppliedJobsPage = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  useEffect(() => {
    const storedJobId = getStoredApplications();

    // const jobApplied = jobs.filter((job) => storedJobId.includes(job.id));
    // setAppliedJobs(jobApplied);

    const jobsApplied = [];
    for (const id of storedJobId) {
      const job = jobs.find((job) => job.id === id);
      if (job) {
        jobsApplied.push(job);
      }
    }

    setAppliedJobs(jobsApplied);
    setDisplayJobs(jobsApplied);
  }, [jobs]);

  // handle remove jobs
  const handleRemoveJobs = (id) => {
    removeAppliedJobs(id);
    const remaining = displayJobs.filter((jobs) => jobs.id !== id);
    setDisplayJobs(remaining);
  };

  // handle filter data
  const handleFilterData = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  return (
    <div className="max-w-7xl mx-auto ">
      <h2 className="text-3xl font-bold text-center py-12">
        Applied Jobs : {displayJobs.length}
      </h2>
      <div className="relative p-6 md:p-0">
        <details className="dropdown absolute right-6 md:-top-20 -top-10">
          <summary
            onClick={() => handleFilterData("all")}
            className="btn m-1 font-bold "
          >
            Filter All
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li
              onClick={() => handleFilterData("remote")}
              className="font-bold"
            >
              <a>Remote</a>
            </li>
            <li
              onClick={() => handleFilterData("onsite")}
              className="font-bold"
            >
              <a>Onsite</a>
            </li>
          </ul>
        </details>
        <div className="flex flex-col  gap-6 ">
          {displayJobs?.map((feature) => (
            <div
              key={feature.id}
              className=" border  md:p-6 p-6 rounded-md md:flex md:justify-evenly md:items-center md:gap-20 space-y-2 md:space-y-0"
            >
              <img src={feature?.logo} alt="" />
              <div>
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
              </div>

              <button
                onClick={() => handleRemoveJobs(feature.id)}
                className="px-4 py-3 bg-gradient-to-r from-[#808efe] via-[#8b81ff] to-[#9577ff] text-white rounded-full text-xl font-semibold"
              >
                Remove Job
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsPage;
