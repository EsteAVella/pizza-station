import React from "react";
import LoginForm from "../components/LoginForm";
import { login as authServiceLogin } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleLogin = async (username: string, password: string) => {
    const success = await authServiceLogin(username, password);
    if (success) {
      // Redirige al dashboard o muestra un mensaje de éxito
      console.log("Login successful");
      navigate("/");
      login();
    } else {
      // Muestra un error
      console.error("Login failed");
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Pizza Station
        </h1>
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
