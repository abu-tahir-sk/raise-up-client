import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { Typewriter } from "react-simple-typewriter";

const Edit = () => {
  const campaign = useLoaderData();
  const { thumbnail, title, campaignType, description, count, date, _id } =
    campaign;
  const { user } = useContext(AuthContext);

  const handleUpdateCampaign = (event) => {
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

    fetch(`https://raise-up-server.vercel.app/campaign/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Update Campaign successfully",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <div className="flex flex-col justify-center w-11/12 mx-auto items-center py-8">
        <h3 className="text-4xl font-extrabold text-center">
          <Typewriter
            words={[`Update Campaign ${title}`]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />{" "}
        </h3>
        <p className="font-medium  text-[17px] py-3 text-center">
          Explore Find a project that inspires you and make a difference.
        </p>
      </div>
      <div className="w-11/12 md:w-7/12  mx-auto my-8 rounded-md">
        <img
          src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-vector-illustration-business-startup-process-team-work-flat-cartoon-style-png-image_5047439.jpg"
          className="h-[70vh] w-full"
          alt=""
        />
        <form
          onSubmit={handleUpdateCampaign}
          className="fieldset bg-[#F4F3F0] p-6"
        >
          <div className="flex justify-center items-center gap-6">
            <div className="flex flex-col w-full">
              <label className="label py-2">Thumbnail</label>
              <input
                type="url"
                name="thumbnail"
                className="input w-full"
                defaultValue={thumbnail}
                placeholder="photoURL"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="label py-2">Enter Campaign title</label>
              <input
                type="text"
                name="title"
                className="input w-full "
                defaultValue={title}
                placeholder="Campaign title"
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-6">
            <div className="flex flex-col w-full">
              <label className="label py-2">Campaign type </label>
              <select
                name="campaignType"
                defaultValue={campaignType}
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
                defaultValue={description}
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
                defaultValue={count}
              ></input>
            </div>
            <div className="flex flex-col w-full">
              <label className="label py-2">Deadline</label>

              <input
                type="date"
                defaultValue={date}
                name="date"
                className="input w-full"
              />
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

          <button className="btn bg-[#2aadb1] text-white mt-4">
            Update Campaign
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
