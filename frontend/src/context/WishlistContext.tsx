"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import {
  postWishlist,
  type Wishlist as WishlistType,
} from "@/api/product/wishlist";

type Product = {
  id: string;
  image: string;
  alt: string;
  title: string;
  price: number;
  rating: number;
  category: string[];
  colors: string[];
  sizes: string[];
};

type WishlistContextType = {
  wishlist: Product[];
  addToWishlist: (product: Product) => Promise<void>;
  removeFromWishlist: (id: string) => void;
  toggleWishlist: (product: Product) => Promise<void>;
};

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined,
);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToWishlist = async (product: Product) => {
    try {
      const wishlistData: Omit<WishlistType, "id"> = {
        userId: "IL1sQM-Ivk0",
        productId: product.id,
      };

      await postWishlist(wishlistData);

      setWishlist((prev) => {
        const exists = prev.some((item) => item.id === product.id);

        if (exists) {
          return prev;
        }

        return [...prev, product];
      });
    } catch (error) {
      console.error("Error adding product to wishlist:", error);
    }
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((product) => product.id !== id));
  };

  const toggleWishlist = async (product: Product) => {
    const isAlreadyWishlisted = wishlist.some((item) => item.id === product.id);

    if (isAlreadyWishlisted) {
      removeFromWishlist(product.id);
      return;
    }

    await addToWishlist(product);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlist must be used inside WishlistProvider");
  }

  return context;
};
