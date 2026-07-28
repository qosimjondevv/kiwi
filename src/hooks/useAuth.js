import { useState } from "react";
import { auth } from "../api";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    setLoading(true);
    setError(null);

    try {
      const data = await auth(username, password);
      setUser(data);
      return data;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, login };
};

