import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../ui/Header";
import { loginDev } from "../../../services/api-service";
import { BarLoader } from "react-spinners";
import { setCookie } from "../../../utils/cookies";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add signup logic here
    try {
      setLoading(true);
      const response = await loginDev(formData);

      setCookie("dev-token", response.accessToken);
      navigate("/dev/dashboard");
    } catch (error) {
      setLoginError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-secondary-dark px-5">
        <div className="w-full max-w-md lg:w-1/2 bg-secondary-light p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-primary-green mb-6 text-center">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              {/* <label className="block text-white te">email</label> */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 bg-secondary-dark rounded-lg text-sm placeholder:text-gray-400 text-gray-200 focus:outline-none focus:ring-0 ${
                  loginError && " border border-red-500"
                }`}
                placeholder="Email"
                required
              />
            </div>
            <div>
              {/* <label className="block text-primary-green">Password</label> */}
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full p-3 bg-secondary-dark rounded-lg text-sm placeholder:text-gray-400 text-gray-200 focus:outline-none focus:ring-0 ${
                  loginError && " border border-red-500"
                }`}
                placeholder="Password"
                required
              />
            </div>

            <div className="flex lg:flex-row flex-col-reverse gap-4 lg:items-center lg:justify-between">
              <p className="text-xs">
                Don't have an account?{" "}
                <Link
                  to={"/auth/developer/signup"}
                  className="text-primary-green"
                >
                  signup
                </Link>
              </p>
              <Link
                to={"/auth/developer/login"}
                className="text-primary-green text-xs"
              >
                Forgot Password
              </Link>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary-green text-secondary-dark rounded-lg font-bold hover:bg-green-500 transition duration-300"
            >
              {loading ? (
                <BarLoader color="#52FF4F" width={150} className="mx-auto" />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
