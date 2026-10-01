export type SignupData = {
  name: string;
  email: string;
  password: string;
};

export const getUsers = async (): Promise<SignupData[]> => {
  const response = await fetch("http://localhost:3001/user");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};

export const signupUser = async (data: SignupData) => {
  const response = await fetch("http://localhost:3001/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  return response.json();
};