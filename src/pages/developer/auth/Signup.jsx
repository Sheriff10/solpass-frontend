import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../ui/Header";
import { signupDev } from "../../../services/api-service";
import { BarLoader } from "react-spinners";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [signupError, setSignupError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return setPasswordError(true);
    }
    try {
      setLoading(true);
      const response = await signupDev(formData);
      console.log(response);
      navigate("/auth/developer/login");
    } catch (error) {
      alert(error.message);
      setSignupError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-secondary-dark">
        <div
          className="w-full ma
        x-w-md lg:w-1/2 bg-secondary-light p-6 rounded-lg"
        >
          <h2 className="text-2xl font-bold text-primary-green mb-6 text-center">
            Sign Up
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
                  signupError && " border border-red-500"
                }`}
                placeholder="Email"
                required
              />
              {signupError && (
                <span className="text-red-500 text-xs">
                  Email in use. Please try again
                </span>
              )}
            </div>
            <div>
              {/* <label className="block text-primary-green">Password</label> */}
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full p-3 bg-secondary-dark rounded-lg text-sm placeholder:text-gray-400 text-gray-200 focus:outline-none focus:ring-0 ${
                  passwordError && " border border-red-500"
                }`}
                placeholder="Password"
                required
              />
            </div>
            <div>
              {/* <label className="block text-primary-green">Confirm Password</label> */}
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full p-3 bg-secondary-dark rounded-lg text-sm placeholder:text-gray-400 text-gray-200 focus:outline-none focus:ring-0 ${
                  passwordError && " border border-red-500"
                }`}
                placeholder="Confirm Password"
                required
              />
              {passwordError && (
                <span className="text-red-500 text-xs">
                  Password does not match. Please try again
                </span>
              )}
            </div>

            <p className="text-sm">
              Already have an account?{" "}
              <Link to={"/auth/developer/login"} className="text-primary-green">
                Login
              </Link>
            </p>
            <button
              type="submit"
              className="w-full py-3 bg-primary-green text-secondary-dark rounded-lg font-bold hover:bg-green-500 transition duration-300"
            >
              {loading ? (
                <BarLoader color="#52FF4F" width={150} className="mx-auto" />
              ) : (
                "Sign up"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
