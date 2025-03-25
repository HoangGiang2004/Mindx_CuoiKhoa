import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { z } from "zod";
import { authServices } from "../../services/auth";
import toast, { Toaster } from "react-hot-toast";

const RegisterSchema = z.object({
  name: z.string().min(2, { message: "Name must have at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  avatar: z.string().url({ message: "Invalid URL" }).optional(),
});

export type RegisterType = z.infer<typeof RegisterSchema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({ resolver: zodResolver(RegisterSchema) });
  const navigate = useNavigate();

  const handleRegister = async (data: RegisterType) => {
    const registerResponse = await authServices.register(data);
    if (!registerResponse) {
      toast.error("Register failed");
      return;
    }
    toast.success("Register successfully");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="bg-purple-600 text-white p-8 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="mb-6">
            Enter your personal details to use all of the site features.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200"
          >
            SIGN IN
          </button>
        </div>

        {/* Right Section */}
        <div className="p-8 md:w-1/2">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Create Account
          </h2>
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
            or use your email for registration
          </p>
          <form className="mt-4" onSubmit={handleSubmit(handleRegister)}>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register("email")}
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
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
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="avatar"
              >
                Avatar URL
              </label>
              <input
                {...register("avatar")}
                type="text"
                placeholder="Avatar URL"
                className="w-full p-2 border rounded"
              />
              {errors.avatar && (
                <span className="text-red-500">{errors.avatar.message}</span>
              )}
            </div>
            <button className="w-full p-2 mt-4 text-white bg-purple-600 rounded font-semibold hover:bg-purple-700">
              SIGN UP
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;