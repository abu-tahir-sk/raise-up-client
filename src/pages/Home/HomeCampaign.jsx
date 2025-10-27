import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaRegCalendarCheck } from "react-icons/fa";
import Loading from "../../components/Loading";
import { FourSquare } from "react-loading-indicators";

const HomeCampaign = () => {
  const { loading, setLoading, user } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://raise-up-server.vercel.app/myCampaign?email=${user.email}`,
        {
          headers: {
            "content-type": `application/json`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setCampaigns(data);
          setLoading(false)
        })
        .catch((err) => {
          console.error("Error fetching campaigns:", err);
          setCampaigns([]);
        });
    }
  }, [user]);

    if (loading) return <Loading />;
  if (campaigns.length === 0) return <p className="text-center"><FourSquare color="#32cd32" size="medium" text="" textColor="" /></p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10  gap-6">
      {campaigns
        ? campaigns.map((campaign) => (
            <div className="card bg-base-100 shadow-sm">
              <div className="">
                <img
                  className="h-full w-full rounded-md"
                  src={campaign.thumbnail}
                  alt={campaign.title}
                />
              </div>
              <div className="card-body">
                <h2 className="card-title">{campaign.title}</h2>

                <div className="card-actions justify-between">
                  <div className="badge border-2 border-[#1abde1] rounded-full ">
                    {campaign.campaignType}
                  </div>
                  <div className="badge flex justify-center items-center">
                    <FaRegCalendarCheck className="text-[#31cfd4]" />
                    {campaign.date}
                  </div>
                </div>
                <Link to={`/details/${campaign._id}`}>
                  {" "}
                  <button className="bg-[#31cfd4] font-bold px-3 text-gray-700 py-1 rounded-md mt-4">
                    {" "}
                    See More{" "}
                  </button>
                </Link>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default HomeCampaign;
