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
  const { signInUsers, loading, setLoading, handleGoogleLogin,setUser,  profileUpdate } =
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
        toast.success("✅ Login successfully");
        navigation("/");
        form.reset("");
        setSuccess(true);
        console.log(res);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setLoading(false);
        console.log(err);
      });
  };
  const handleGoogle = () => {
    handleGoogleLogin()
      .then((result) => {
        console.log(result);
        const user = result.user;
        setUser(user)
        toast.success("✅ Login successfully");
        navigation("/");

        setSuccess(true);
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMessage(err.message);
        setLoading(false);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
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
          <div className="form-control mt-6">
            <button
              type="submit"
              disabled={loading}
              //     className={`p-2 rounded text-white font-semibold ${
              //       loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
              //     }`}
              className="btn btn-primary"
            >
              Login
            </button>
            <div>Or</div>
          </div>
        </form>

        <button onClick={handleGoogle} className="btn text-center">
          Sign In with Google
        </button>
        {error && <p className="text-red-500">{error}</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <p>
          New to this website please <Link to="/signUp"> Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
