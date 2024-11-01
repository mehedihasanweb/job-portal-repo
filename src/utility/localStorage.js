import { toast } from "react-toastify";

const getStoredApplications = () => {
  const storedApplications = localStorage.getItem("job-applications");
  if (storedApplications) {
    return JSON.parse(storedApplications);
  }
  return [];
};

// save applied jobsId in localStorage
const saveJobApplication = (id) => {
  const storedApplications = getStoredApplications();
  const exists = storedApplications?.find((jobId) => jobId === id);
  if (!exists) {
    storedApplications.push(id);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedApplications)
    );
    toast("You Have Applied Successfully!!");
  }
};

const removeAppliedJobs = (id) => {
  const storedApplications = getStoredApplications();
  const exists = storedApplications?.find((jobId) => jobId === id);
  console.log(exists);

  if (exists) {
    const updateAppliedJobs = storedApplications.filter((id) => id !== exists);
    localStorage.setItem("job-applications", JSON.stringify(updateAppliedJobs));
    toast("Job Remove Successfully!!");
  }
};

export { getStoredApplications, saveJobApplication, removeAppliedJobs };
