import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Title from "./Title";
import { AuthProvider } from "../context/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Title />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
