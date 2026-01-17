"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        setEmail(null)
        setPassword(null)

        setEmail(e.target.email.value)
        setPassword(e.target.password.value)

        if(email === "adminul@gmail.com" && password === "87654321") {
            document.cookie = "auth=true; path=/"
            router.push("/products")
            // alert("hello kantabay")
        }else {
            alert("Wrong email or password")
        }
    }

  return (
    <section className="min-h-screen flex items-center justify-center bg-(--secondary) px-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6 text-(--secondary)">
          Login
        </h2>

        <p className="text-center text-(--secondary) mb-8">
          Welcome back! Please enter your credentials.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-(--secondary) font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-(--secondary) rounded-lg focus:ring-2 focus:ring-(--secondary) outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-(--secondary) font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-(--secondary) rounded-lg focus:ring-2 focus:ring-(--secondary) outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-(--secondary) text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-(--secondary) text-(--background) py-3 rounded-lg font-semibold hover:bg-primary/90 transition cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Register Link */}
        <p className="text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-(--secondary) font-semibold hover:underline">
            Create Account
          </a>
        </p>

      </div>
    </section>
  );
}

export default Login;