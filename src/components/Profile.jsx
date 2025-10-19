import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaPen, FaUser } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleProfileUpdate = (e) => {
      e.preventDefault()
      const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const profile = {
      displayName:name,
      photoURL:photoURL,
    }
       if (!name) {
      toast.error("Please provide a valid email", {
        position: "top-center",
        theme: "colored",
      });
      return;
    }
    profileUpdate(profile)
     .then(() => {
        toast.success("Profile Update  successful!", {
          position: "top-center",
          theme: "colored",
        });
        navigate("/");
      })
      .catch((err) => {alert(err.message)
      });
  

  };
  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleProfileUpdate}>
        <div className="relative py-4">
          <label className="">
            <input
              type="text"
              className="input input-lg pl-10  hover:opacity-30 hover:border-2 hover:text-black"
              placeholder="username"
              name="name"
              required
            />
          </label>
          <span className="absolute left-4 top-8 opacity-100">
            <FaUser></FaUser>
          </span>
        </div>
        <div className="relative py-4">
          <label className=" ">
            <input
              type="url"
              className="input input-lg pl-10  hover:opacity-30 hover:border-2 hover:text-black"
              required
              placeholder="photoURL"
              name="photoURL"
            />
          </label>
          <span className="absolute left-4 top-8 opacity-1000">
            <GrGallery></GrGallery>
          </span>
        </div>
        <button className="btn w-full border-none">
          Update <FaPen></FaPen>
        </button>
      </form>
    </div>
  );
};

export default Profile;
