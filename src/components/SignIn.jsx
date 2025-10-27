import { useContext, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigation = useNavigate();
  const { signInUsers, loading, setLoading, handleGoogleLogin,setUser } =
    useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    setLoading(true);
    setError("");
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;

    setSuccess(false);

    if (!terms) {
      setError("Please accept Our terms and conditions");
      return;
    }
    signInUsers(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user)
        // if(!res.user.emailVerified){
        //       setError('Please verify your email address')
        // }
        toast.success("Login successfully");
        navigation("/");
        form.reset("");
        setSuccess(true);
        
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setLoading(false);
       
      });
  };
  const handleGoogle = () => {
    handleGoogleLogin()
      .then((result) => {
        
        const user = result.user;
        setUser(user)
        
        toast.success("Login successfully");
        navigation("/");

        setSuccess(true);
      })
      .catch((err) => {
        
        setErrorMessage(err.message);
        setLoading(false);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center py-8">
      <div className="bg-base-100 w-10/12 md:w-4/12 mx-auto shrink-0 shadow-2xl flex flex-col justify-center items-center px-8">
        <h3 className="text-3xl font-bold text-center py-6 w-full">Login for  <span className="text-[#1abde1] text-3xl font-extrabold">RISE</span> <span>Up</span></h3>
        <form onSubmit={handleLogin} className="w-full">
          <div className="form-control">
            <input
              type="email"
              placeholder="email"
              name="email"
              className="border rounded-lg my-2 focus:outline-none focus:bg-none group py-3 px-3 w-full text-[18px]"
              required
            />
          </div>
          <div className="form-control">
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
                className=" absolute right-6 top-5 text-2xl"
              >
                {showPassword ? <IoMdEye /> : <FaEyeSlash />}
              </button>
            </div>
            <div className="flex justify-between items-center py-3">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="checkbox" name="terms" className="checkbox" />
                  <span className="label-text">Remember me</span>
                </label>
              </div>
              <label className="label">
                <Link to="/forgot" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
          </div>
          <div className="form-control mt-4">
            <button
              type="submit"
              disabled={loading}
              //     className={`p-2 rounded text-white font-semibold ${
              //       loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
              //     }`}
              className="btn w-full bg-[#1abde1]"
            >
              Login
            </button>
            <div className="divider font-bold">Or</div>
          </div>
        </form>

        <div className="w-full">
          <button onClick={handleGoogle} className="btn text-center bg-[#F4F3F0] w-full my-3">
          Sign In with Google
        </button>
         {error && <p className="text-red-500">{error}</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <p className="my-4 text-center text-[18px]">
          New to this website please <Link to="/signUp" className="text-[#1abde1]"> Sign Up</Link>
        </p>
        </div>
       
      </div>
    </div>
  );
};

export default SignIn;
