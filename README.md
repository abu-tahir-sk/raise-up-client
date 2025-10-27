# RAISE UP

### Details Page — Deadline Check & Donate

- This page displays campaign details and handles donations.
  If the campaign deadline has passed, the Donate button is disabled or shows a toast error.

\*\*\* ✅ Key Features

\*\*\* Display campaign info (title, type, date, thumbnail, description, amount)

\*\*\* Check deadline before donation

\*\*\* Show toast or SweetAlert modal for success or error

### React Implementation (Details.jsx)

import { CiBadgeDollar, CiCalendarDate } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Details = () => {
  const data = useLoaderData();
  const { thumbnail, title, campaignType, description, count, date, _id } = data;

  const handleClick = () => {
    const now = new Date();
    const deadline = new Date(date);

    // ✅ Check if deadline is over
    if (deadline.getTime() < now.getTime()) {
      toast.error("Sorry! This campaign's deadline is over.");
      return;
    }

    // Donate API call
    fetch(`http://localhost:5000/donate/${_id}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        const result = await res.json();
        if (!res.ok) {
          toast.error(result.message || "Donation failed!");
        } else {
          Swal.fire({
            title: "Donation successful!",
            icon: "success",
          });
        }
      })
      .catch(() => toast.error("Something went wrong!"));
  };

  return (
    <div className="flex flex-col justify-center items-center w-11/12 mx-auto py-8">
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={thumbnail} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="font-extrabold text-3xl">{title}</h2>
          <div className="flex justify-between items-center">
            <div className="badge badge-outline border-[#31cfd4] text-[15px]">{campaignType}</div>
            <div className="badge text-[15px]">
              <CiCalendarDate className="text-2xl" /> {date}
            </div>
          </div>
          <p className="text-[17px] py-2">{description}</p>
          <div className="pb-3 flex items-center gap-2 text-[15px]">
            <CiBadgeDollar className="text-2xl" /> {count}
          </div>
          <button
            onClick={handleClick}
            className="btn bg-[#31cfd4] text-white"
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
