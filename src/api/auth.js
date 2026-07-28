import { BASE_URL } from "./config";

export const auth = async (username, password) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) throw new Error("login yoki parolingiz natogri");

  return await response.json();
};
