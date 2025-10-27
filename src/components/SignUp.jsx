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
  const navigation = useNavigate();
  const { createUser, emailVerification, setUser, profileUpdate } =
    useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");
    setErrorMessage("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

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
      .then(() => {
        profileUpdate(profile) 
        toast.success("Sign in success");
        form.reset();
        navigation("/");
        emailVerification()
          .then()
          .catch();
      })
      .catch((err) => {
        
        setError(err.message);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-base-100 w-10/12 md:w-4/12 mx-auto shrink-0 shadow-2xl flex flex-col justify-center items-center px-8">
      <h3 className="text-3xl font-bold text-center py-6 w-full">Sign Up for  <span className="text-[#1abde1] text-3xl font-extrabold">RISE</span> <span>Up</span></h3>
        <form onSubmit={handleSignUp} className="w-full">
          <div className="form-control">
            
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="border rounded-lg my-2 focus:outline-none focus:bg-none group py-3 px-3 w-full text-[18px]"
              required
            />
            
            <input
              type="email"
              name="email"
              placeholder="email"
              className="border rounded-lg my-2 focus:outline-none focus:bg-none group py-3 px-3 w-full text-[18px]"
              required
            />
           
            <input
              type="url"
              name="photoURL"
              placeholder="photo URL"
              className="border rounded-lg my-2 focus:outline-none focus:bg-none group py-3 px-3 w-full text-[18px]"
              required
            />
          </div>
          <div className="form-control relative">
            
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
             className="border rounded-lg my-2 focus:outline-none focus:bg-none group py-3 px-3 w-full text-[18px]"
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
            <button className="btn bg-[#1abde1] text-white w-full">Sign Up</button>
          </div>
        </form>
        {error && (
          <p className="text-red-500 py-4">
            {error.split("/")[1].slice(0, 20)}
          </p>
        )}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <p className="my-4 text-center text-[18px]">
          Already have an account ? please <Link to="/signIn" className="text-[#1abde1]">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
  
        
       
         
            