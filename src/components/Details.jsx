import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  const { thumbnail, title, campaignType, description, count, date, _id } =
    data;
    const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true); 
    try {
     
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Action Completed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={thumbnail} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{campaignType}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{count}</div>
            <div className="badge badge-outline">{date}</div>
          </div>

          <Link to={`/donate`}>
            <button onClick={handleClick}
      disabled={loading} 
      className={`btn ${loading ? "btn-disabled" : "btn-primary"}`}>Donate</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
