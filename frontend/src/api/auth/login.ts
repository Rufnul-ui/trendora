export type LoginData = {
  email: string;
  password: string;
};

export const getUsers = async (): Promise<LoginData[]> => {
  const response = await fetch("http://localhost:3001/user");

  if (!response.ok) {
    throw new Error("Failed to fetch User");
  }

  return response.json();
};

export const loginUser = async (data: LoginData): Promise<LoginData | null> => {
  const users = await getUsers();

  const user = users.find(
    (user) => user.email === data.email && user.password === data.password,
  );

  return user || null;
};
