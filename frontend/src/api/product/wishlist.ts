export type Wishlist = {
  id: string;
  userId: string;
  productId: string;
};

export const getWishlist = async (): Promise<Wishlist[]> => {
  const response = await fetch("http://localhost:3001/wishlist");

  if (!response.ok) {
    throw new Error("Failed to load Wishlist");
  }

  return response.json();
};

export const postWishlist = async (
  wishlist: Omit<Wishlist, "id">,
): Promise<Wishlist> => {
  const response = await fetch("http://localhost:3001/wishlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(wishlist),
  });

  if (!response.ok) {
    throw new Error("Failed to add product to wishlist");
  }

  return response.json();
};
