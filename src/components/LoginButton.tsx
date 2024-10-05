import React from "react";
import { useNavigate } from "react-router-dom";

const LoginButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <button
      onClick={handleLoginClick}
      className="bg-blue-500 text-white p-2 rounded"
    >
      Go to Login
    </button>
  );
};

export default LoginButton;
