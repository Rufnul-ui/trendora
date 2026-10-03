export type ResetPasswordData = {
  email: string;
  newPassword: string;
};

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export const resetPassword = async (data: ResetPasswordData): Promise<User> => {
  // Get users
  const response = await fetch("http://localhost:3001/user");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const users: User[] = await response.json();

  // Find user by email
  const user = users.find(
    (user) => user.email.toLowerCase() === data.email.toLowerCase(),
  );

  if (!user) {
    throw new Error("User not found");
  }

  // Update password
  const updateResponse = await fetch(`http://localhost:3001/user/${user.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: data.newPassword,
    }),
  });

  if (!updateResponse.ok) {
    throw new Error("Failed to reset password");
  }

  return updateResponse.json();
};
