import { useEffect, useState } from "react";

const Category = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, []);

  // console.log(categoryData);

  return (
    <div className="md:pt-20 pt-10">
      <h2 className="text-4xl font-bold text-center">Job Category List</h2>
      <p className="text-gray-400 text-center pt-6">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex flex-wrap items-center justify-center md:gap-8 gap-4 pt-12">
        {categoryData?.map((category) => (
          <div key={category.id} className="bg-[#f9f9ff] p-6">
            <img src={category?.logo} alt="accounts_image" />
            <h3 className="text-xl font-bold pt-3">
              {category?.category_name}
            </h3>
            <p className="text-gray-400">{category?.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
