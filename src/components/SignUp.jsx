import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigate()
  const { createUser,emailVerification } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");
    setErrorMessage("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    if (password.length < 6) {
      setErrorMessage("Password must contain at least 6 characters ");
      return;
    }
    if (!/[A-Z]/.test(name)) {
      setErrorMessage("Name  must contain at least one Upercase");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setErrorMessage("Password  must contain at least one lowercase");
      return;
    }

    createUser(email, password)
      .then((res) => {
        toast.success("Sign in success");
        form.reset()
        navigation('/')
        emailVerification()
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bo      rdered"
              required
            />
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              name="photoURL"
              placeholder="photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className=" absolute right-8 top-8"
            >
              {showPassword ? <IoMdEye /> : <FaEyeSlash />}
            </button>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
        {error && (
          <p className="text-red-500 py-4">
            {error.split("/")[1].slice(0, 20)}
          </p>
        )}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <p>Already have an account ? please <Link to="/signIn">Sign In</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
