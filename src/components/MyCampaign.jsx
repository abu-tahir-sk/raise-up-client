import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "./Loading";

const MyCampaign = () => {
  const { user,loading, setLoading } = useContext(AuthContext);
  const [campaign, setCampaign] = useState([]);

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
          setCampaign(data);
        })
        .catch((err) => {
          console.error("Error fetching campaigns:", err);
          setCampaign([]);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://raise-up-server.vercel.app/campaign/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            setLoading(false)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your campaign has been deleted.",
                icon: "success",
              });
              const remaining = campaign.filter((cam) => cam._id !== id);
              setCampaign(remaining);
            }
          })
          .catch((err) => console.error("Delete error:", err));
      }
    });
  };

    if (loading) return <Loading />;
    if (campaign.length === 0) return <Loading />;

  return (
    <div className="w-10/12 mx-auto">
      <div className="overflow-x-auto bg-[#F4F3F0] p-3 my-8">
        <table className="table w-full">
          {/* Table Head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Campaign type</th>
              <th className="hidden md:table-cell">Expire date</th>
              <th>Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {campaign && campaign.length > 0 ? (
              campaign.map((singleCampaign) => (
                <tr key={singleCampaign._id}>
                  <td>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-16 md:w-44 md:h-32 rounded overflow-hidden">
                        <img
                          src={singleCampaign.thumbnail}
                          alt={singleCampaign.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">{singleCampaign.title}</h3>
                      </div>
                    </div>
                  </td>
                  <td>{singleCampaign.campaignType}</td>
                  <td className="hidden md:table-cell">
                    {singleCampaign.date}
                  </td>
                  <td>
                    <div className="join join-vertical space-y-2 md:space-y-6">
                      <button className="join-item text-xl bg-[#F4F3F0] rounded-full p-2 text-black">
                        <Link to={`/edit/${singleCampaign._id}`}>
                          <FaEdit />
                        </Link>
                      </button>
                      <button
                        onClick={() => handleDelete(singleCampaign._id)}
                        className="join-item text-xl bg-[#F4F3F0] rounded-full p-2 text-red-400"
                      >
                        <MdDeleteOutline />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No campaigns found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCampaign;
