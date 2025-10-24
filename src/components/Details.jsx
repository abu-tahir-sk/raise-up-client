import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
  const data = useLoaderData();
  const { thumbnail, title, campaignType, description, count, date, _id } =
    data;
  console.log(data);

  const handleClick = () => {
    fetch(`http://localhost:5000/donate/${_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Donation successful!",
          icon: "success",
          draggable: true,
        });
      });
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

          <button onClick={handleClick} className="btn btn-primary">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
