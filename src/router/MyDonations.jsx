import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyDonations = () => {
  const [donations, setDonations] = useState([]);
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
        setDonations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching campaigns:", err);
        setLoading(false);
      });
  }, [user]);

  if (loading) return <p>Loading donations...</p>;
  if (donations.length === 0) return <p>No donations found.</p>;
  return (
    <div>
      {donations.map((donation, indx) => (
        <div className="card bg-base-100 w-96 shadow-sm" key={indx}>
          <figure>
            <img src={donation.thumbnail} alt={donation.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              title
              <div className="badge badge-secondary">
                {donation.campaignType}
              </div>
            </h2>
            <p>{donation.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{donation.count}</div>
              <div className="badge badge-outline">{donation.date}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyDonations;
