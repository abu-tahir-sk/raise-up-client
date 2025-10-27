import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleCampaign from "../components/SingleCampaign";

const AllCampaign = () => {
  const data = useLoaderData();
  const [campaign, setCampaign] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  const campaigns = async () => {
    const res = await fetch(`http://localhost:5000/campaign?sort=${sortOrder}`);
    const data = await res.json();
    setCampaign(data);
    if (Array.isArray(data)) {
      setCampaign(data);
    } else if (data?.data && Array.isArray(data.data)) {
      setCampaign(data.data);
    } else {
      console.error("Loader data is not an array:", data);
      setCampaign([]);
    }
  };

  useEffect(() => {
    campaigns();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortOrder]);

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="w-10/12 mx-auto">
      <div className="flex flex-col justify-center items-center py-8">
        <h3 className="text-5xl font-extrabold ">Discover All Campaigns </h3>
        <p className="font-serif py-3">
          Explore all the campaigns hosted on our platform, from personal causes
          to creative ideas. Find a project that inspires you and make a
          difference.
        </p>
      </div>
      <div className="flex justify-between items-center px-3 py-3 mt-8 border-b-2 border-gray-300">
        <h3 className="font-bold">All Campaigns </h3>
        <button
          className="btn font-bold bg-[#1abde1] text-white"
          onClick={toggleSort}
        >
          sort
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
        {campaign.map((singleCampaign) => (
          <SingleCampaign
            key={singleCampaign._id}
            singleCampaign={singleCampaign}
            setCampaign={setCampaign}
          ></SingleCampaign>
        ))}
      </div>
    </div>
  );
};

export default AllCampaign;
