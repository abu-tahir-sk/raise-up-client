import { CiBadgeDollar, CiCalendarDate } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Details = () => {
  const data = useLoaderData();
  const { thumbnail, title, campaignType, description, count, date, _id } =
    data;

  const handleClick = () => {
    const now = new Date();
    const deadline = new Date(date);
    if (deadline.getTime() < now.getTime()) {
      Swal.fire({
        title: `Sorry! This campaign's deadline is over.`,
        icon: "error",
        draggable: true,
      });
      return;
    }
    fetch(`https://raise-up-server.vercel.app/donate/${_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        const result = await res.json();

        if (!res.ok) {
          Swal.fire({
            title: `Donation failed!${result.message}`,
            icon: "error",
            draggable: true,
          });
        } else {
          Swal.fire({
            title: "Donation successful!",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong!");
      });
  };

  return (
    <div className="flex flex-col justify-center items-center w-11/12 mx-auto py-8">
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img src={thumbnail} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="font-extrabold text-3xl">{title}</h2>
          <div className="flex justify-between items-center ">
            <div className="badge badge-outline border-[#31cfd4] text-[15px]">
              {" "}
              {campaignType}
            </div>
            <div className="badge text-[15px]">
              <CiCalendarDate className="text-2xl" /> {date}
            </div>
          </div>
          <p className="text-[17px] py-2">{description}</p>
          <div className="pb-3 flex items-center gap-2 text-[15px]">
            <CiBadgeDollar className="text-2xl" /> {count}
          </div>
          <button onClick={handleClick} className="btn bg-[#31cfd4] text-white">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
