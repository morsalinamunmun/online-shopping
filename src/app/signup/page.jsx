// import React, { useState } from 'react';
"use client";
import { Input, Button } from 'antd'; // Ant Design Input and Button
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing React Icons

const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempted with:', { username, password });
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Only allow digits
    setPassword(value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Create to Your Account</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Input */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Username"
            //   value={username}
              onChange={(e) => setUsername(e.target.value)}
              prefix={<FaUser />} // React Icon for User
              size="large"
              required
            />
          </div>
          <div className="relative">
            <Input
              type="text"
              placeholder="Phone Number"
            //   value={username}
              onChange={(e) => setUsername(e.target.value)}
              prefix={<FaUser />} // React Icon for User
              size="large"
              required
            />
          </div>

          <div className="relative">
            <Input
              type="email"
              placeholder="Email"
            //   value={username}
              onChange={(e) => setUsername(e.target.value)}
              prefix={<FaUser />} // React Icon for User
              size="large"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <Input
            //   type={showPassword ? "text" : "password"}
              placeholder="Password"
            //   value={password}
              onChange={handlePasswordChange}
              prefix={<FaLock />} // React Icon for Lock
            //   suffix={
            //     <span onClick={() => setShowPassword(!showPassword)}>
            //       {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Toggle password visibility icon */}
            //     </span>
            //   }
              size="large"
              required
              pattern="\d*"
              inputMode="numeric"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
            size="large"
          >
            sign Up
          </Button>
        </form>

        {/* Forgot Password */}
        <div className="mt-4 text-center">
          {/* <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a> */}
        </div>

        {/* Sign Up Option */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
