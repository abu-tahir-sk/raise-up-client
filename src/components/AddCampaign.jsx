import { useContext, useState } from "react";
import Swal from "sweetalert2";

import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
const AddCampaign = () => {
  const {user} = useContext(AuthContext);

  const [error, setError] = useState("");
  const handleAddCampaign = (event) => {
    event.preventDefault();
    const form = event.target;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const campaignType = form.campaignType.value;
    const description = form.description.value;
    const count = form.count.value;
    const date = form.date.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const info = {
      thumbnail,
      title,
      campaignType,
      description,
      count,
      date,
      userEmail,
      userName,
    };
    console.log(info);
    if (
      !thumbnail ||
      !title || !description
    ) {
      setError(toast.error("fill up all field"));
      return;
    }
     const today = new Date().toISOString().split("T")[0];
    if (date < today) {
      setError(toast.error(''));
      return;
    }
    setError("");

    fetch("http://localhost:5000/campaign", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Campaign successfully",
            icon: "success",
            draggable: true,
          });
          form.reset()
        }
      });
  };
  return (
    <div>
      {
        error && <p>{error}</p>
      }
      <div className="w-8/12 mx-auto">
        <form onSubmit={handleAddCampaign} className="fieldset">
          <div className="flex justify-center items-center gap-6">
            <div className="flex flex-col w-full">
              <label className="label py-2">Thumbnail</label>
              <input
                type="url"
                name="thumbnail"
                className="input w-full"
                placeholder="photoURL"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="label py-2">Enter Campaign title</label>
              <input
                type="text"
                name="title"
                className="input w-full "
                placeholder="Campaign title"
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-6">
            <div className="flex flex-col w-full">
              <label className="label py-2">Campaign type </label>
              <select
                name="campaignType"
                defaultValue="Medium"
                className="select input w-full"
              >
                <option>personal issue</option>
                <option>startup</option>
                <option>business</option>
                <option>creative ideas</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label className="label py-2">description</label>
              <input
                type="text"
                name="description"
                className="input w-full "
                placeholder="Enter description"
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-6">
            <div className="flex flex-col w-full">
              <label className="label py-2">Minimum donation amount</label>

              <input
                type="number"
                name="count"
                min="1"
                className="input w-full"
                defaultValue={1}
              ></input>
            </div>
            <div className="flex flex-col w-full">
              <label className="label py-2">Deadline</label>

              <input type="date" name="date" className="input w-full" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-6">
            <div className="flex flex-col w-full">
              <label className="label py-2">User Email</label>
              <input
                type="email"
                name="userEmail"
                className="input w-full"
                defaultValue={user && user.email}
                readOnly
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="label py-2">User Name</label>

              <input
                type="text"
                name="userName"
                className="input w-full"
                defaultValue={user && user.displayName}
                readOnly
              />
            </div>
          </div>

          <button className="btn btn-neutral mt-4">Add New Campaign</button>
        </form>
      </div>
    </div>
  );
};

export default AddCampaign;
