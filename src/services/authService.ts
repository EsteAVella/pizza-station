export const login = async (
  username: string,
  password: string
): Promise<boolean> => {
  // Simulación de autenticación
  if (username === "admin" && password === "password") {
    return true;
  }
  return false;
};
