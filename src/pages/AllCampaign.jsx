import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleCampaign from "../components/SingleCampaign";

const AllCampaign = () => {
  const data = useLoaderData();
  const [campaign, setCampaign] = useState(data);
  return (
    <div className="w-10/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {campaign.map((singleCampaign) => (
          <SingleCampaign key={singleCampaign._id} singleCampaign={singleCampaign} setCampaign={setCampaign}></SingleCampaign>
        ))}
      </div>
    </div>
  );
};

export default AllCampaign;
