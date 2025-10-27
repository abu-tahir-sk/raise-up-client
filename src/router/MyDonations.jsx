import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaRegCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyDonations = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user.email) return;
    fetch(`http://localhost:5000/myDonations?email=${user.email}`, {
      headers: {
        "content-type": `application/json`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching campaigns:", err);
        setLoading(false);
      });
  }, [user]);

  if (loading) return <p>Loading donations...</p>;
  if (campaigns.length === 0) return <p>No donations found.</p>;
  return (
    <div className="w-11/12 mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns ? ( campaigns.map((campaign,indx)=> <div className="card bg-base-100 shadow-sm" key={indx}>
                 <div className="">
                   <img className="h-full w-full rounded-md" src={campaign.thumbnail} alt={campaign.title} />
                 </div>
                 <div className="card-body">
                   <h2 className="card-title">
                     {campaign.title}
                    
                   </h2>
                   
                   <div className="card-actions justify-between">
                     <div className="badge border-2 border-[#1abde1] rounded-full ">{campaign.campaignType}</div>
                     <div className="badge flex justify-center items-center"><FaRegCalendarCheck className="text-[#31cfd4]" />{campaign.date}</div>
                   </div>
                   <Link to={`/details/${campaign._id}`}>
                     {" "}
                     <button className="bg-[#31cfd4] font-bold px-3 text-gray-700 py-1 rounded-md mt-4"> See More </button>
                   </Link>
                 </div>
               </div>)
               
             ) : (
               ""
             )}
      </div>
    </div>
  );
};

export default MyDonations;
