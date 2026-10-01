export type ForgotPasswordData = {
  email: string;
};

export const getUsers = async (): Promise<ForgotPasswordData[]> => {
  const response = await fetch("http://localhost:3001/user");

  if (!response.ok) {
    throw new Error("Failed to fetch User");
  }

  return response.json();
};

export const ForgotPwd = async (
  data: ForgotPasswordData,
): Promise<ForgotPasswordData | null> => {
  const users = await getUsers();

  const user = users.find((user) => user.email === data.email);

  return user || null;
};
