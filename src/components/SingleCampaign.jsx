import { Link } from "react-router-dom";

const SingleCampaign = ({  singleCampaign }) => {
  const {
    thumbnail,
    title,
    campaignType,
    description,
    count,
    date,
    _id
  } = singleCampaign;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={thumbnail}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{campaignType}</div>
        </h2>
        <p>
         {description}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{count}</div>
          <div className="badge badge-outline">{date}</div>
        </div>
       <Link to={`/details/${_id}`}> <button> See More </button></Link>
      </div>
    </div>
  );
};

export default SingleCampaign;
