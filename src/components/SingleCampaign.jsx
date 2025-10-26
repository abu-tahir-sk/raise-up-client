import { Link } from "react-router-dom";
import { FaRegCalendarCheck } from "react-icons/fa";
const SingleCampaign = ({  singleCampaign }) => {
  const {
    thumbnail,
    title,
    campaignType,
    date,
    _id
  } = singleCampaign;

  return (
   <div className="card bg-base-100 shadow-sm">
          <div className="">
            <img className="h-full w-full rounded-md" src={thumbnail} alt={title} />
          </div>
          <div className="card-body">
            <h2 className="card-title">
              {title}
             
            </h2>
            
            <div className="card-actions justify-between items-center">
              <div className="badge border-2 border-[#1abde1] rounded-full flex">{campaignType}</div>
              <div className="badge"><FaRegCalendarCheck className="text-[#31cfd4]" />{date}</div>
            </div>
            <Link to={`/details/${_id}`}>
              {" "}
              <button className="bg-[#31cfd4] font-bold px-3 py-1 text-gray-700 rounded-md mt-4"> See More </button>
            </Link>
          </div>
        </div>
  );
};

export default SingleCampaign;
