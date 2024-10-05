import React, { useState } from "react";
import { LoginFormProps } from "../interface/LoginFormProps";

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 bg-gray-50 p-8 rounded-lg shadow-lg max-w-sm mx-auto mt-10"
    >
      <h2 className="text-3xl font-semibold text-gray-700 text-center mb-6">
        Login for more info
      </h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all"
      />
      <button
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-md font-medium transition-all"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
