import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const useAuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const isValid = username.trim() !== "" && password.trim() !== "";

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    const result = await login(username, password);
    if (result) navigate("/");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!isValid) return;

    localStorage.setItem("token", "mock-token");
    localStorage.setItem("user", JSON.stringify({ username }));
    navigate("/");
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
    handleRegister,
    isValid,
    loading,
    error,
  };
};
