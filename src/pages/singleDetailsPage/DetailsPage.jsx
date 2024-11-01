import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localStorage";

const DetailsPage = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const singleFeature = data?.find((item) => item.id === idInt);

  const {
    salary,
    job_title,
    contact_information,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
  } = singleFeature;

  const handleLocalStorage = (id) => {
    saveJobApplication(id);
  };

  return (
    <div>
      <div className=" bg-[#f9f9ff]">
        <h2 className="text-center text-3xl font-bold py-20">
          Job Details : {job_title}
        </h2>
      </div>
      <div className="max-w-7xl mx-auto md:my-20">
        <div className="flex flex-wrap md:flex-nowrap gap-5 p-6">
          <div className=" md:w-[70%]">
            <h4 className="text-xl font-semibold pb-4">
              Job Description:{" "}
              <span className="text-gray-500">{job_description}</span>
            </h4>
            <h4 className="text-xl font-semibold pb-4">
              Job Responsibility:{" "}
              <span className="text-gray-500">{job_responsibility}</span>
            </h4>
            <h3 className="text-xl font-semibold py-4">
              Educational Requirements:{" "}
            </h3>
            <p className="text-gray-500">{educational_requirements}</p>
            <h3 className="text-xl font-semibold py-4">Experiences:</h3>
            <p className="text-gray-500">{experiences}</p>
          </div>
          <div className=" md:w-[30%] bg-[#f9f9ff] p-4">
            <h2 className="text-xl font-bold">Job Details</h2>
            <hr className="my-4" />
            <h3 className="font-bold">
              Salary: <span className="text-gray-500">{salary}</span>
            </h3>
            <h3 className="font-bold pt-2 pb-7">
              Job Title: <span className="text-gray-500">{job_title}</span>
            </h3>
            <h2 className="text-xl font-bold">Contact Information</h2>
            <hr className="my-4" />
            <h3 className="font-bold">
              Phone:{" "}
              <span className="text-gray-500">
                {contact_information?.phone}
              </span>
            </h3>
            <h3 className="font-bold py-2">
              Email:{" "}
              <span className="text-gray-500">
                {contact_information?.email}
              </span>
            </h3>
            <h3 className="font-bold mb-8">
              Address:{" "}
              <span className="text-gray-500">
                {contact_information?.address}
              </span>
            </h3>
            <button
              onClick={() => handleLocalStorage(singleFeature?.id)}
              className="w-full px-4 py-3 bg-gradient-to-r from-[#808efe] via-[#8b81ff] to-[#9577ff] text-white rounded-lg text-xl font-semibold"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DetailsPage;
