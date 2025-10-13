import { useContext, useRef } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  const emailRef = useRef();
  const { forgotPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleForgot = (e) => {
    e.preventDefault();
    const email = emailRef.current.value.trim();
    if (!email) {
      toast.error("Please provide a valid email", {
        position: "top-center",
        theme: "colored",
      });
      return;
    }
    forgotPassword(email).then(() => {
      alert("Password reset email sent. Please check your inbox.");
      navigate("/signIn")
    })
     .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleForgot} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              ref={emailRef}
              name="email"
              placeholder="User email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
