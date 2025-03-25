import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { z } from "zod";
import { authServices } from "../../services/auth";
import toast from "react-hot-toast";

const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });
  const navigate = useNavigate();

  const handleLogin = async (data: LoginSchemaType) => {
    const loginResponse = await authServices.login(data);
    if (!loginResponse) {
      toast.error("Login failed");
      return;
    }
    toast.success("Login successfully");
    localStorage.setItem("token", loginResponse.accessToken);
    navigate("/admin");
  };

  const handleSignUp = () => {
    navigate("/register"); // Điều hướng đến trang đăng ký
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="bg-purple-600 text-white p-8 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
          <p className="mb-6">
            Register with your personal details to use all of the site features.
          </p>
          <button
            onClick={handleSignUp}
            className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200"
          >
            SIGN UP
          </button>
        </div>

        {/* Right Section */}
        <div className="p-8 md:w-1/2">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
          <div className="flex justify-center space-x-4 mb-6">
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
              <i className="fab fa-facebook-f text-blue-600"></i>
            </button>
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
              <i className="fab fa-google text-red-600"></i>
            </button>
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
              <i className="fab fa-linkedin-in text-blue-500"></i>
            </button>
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
              <i className="fab fa-github text-gray-800"></i>
            </button>
          </div>
          <p className="text-center text-gray-500 mb-4">
            or use your email and password
          </p>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="mb-4">
              <label
                className="block text-sm font-bold text-gray-700 mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold text-gray-700 mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
            <p className="text-right text-sm text-blue-500 mb-4 cursor-pointer hover:underline">
              Forgot password?
            </p>
            <button className="w-full bg-purple-600 text-white py-2 rounded font-semibold hover:bg-purple-700">
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;