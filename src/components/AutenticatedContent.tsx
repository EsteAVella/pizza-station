import React from "react";
import { useAuth } from "../context/AuthContext";

const AuthenticatedContent: React.FC = () => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);

  return (
    <div>
      {isAuthenticated ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
          <strong className="font-bold">¡Bienvenido de nuevo!</strong>
          <p className="mt-2">Estás logueado y puedes ver este contenido.</p>
        </div>
      ) : (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <strong className="font-bold">¡Acceso Denegado!</strong>
          <p className="mt-2">
            Necesitas iniciar sesión para ver este contenido.
          </p>
        </div>
      )}
    </div>
  );
};

export default AuthenticatedContent;
