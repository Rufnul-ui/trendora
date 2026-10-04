"use client";

import { createContext, useContext, useState, ReactNode } from "react";

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
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
  toggleWishlist: (product: Product) => void;
};

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined,
);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToWishlist = (product: Product) => {
    setWishlist((prev) => [...prev, product]);
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((product) => product.id !== id));
  };

  const toggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const isAlreadyWishlisted = prev.some((item) => item.id === product.id);

      if (isAlreadyWishlisted) {
        return prev.filter((item) => item.id !== product.id);
      }

      return [...prev, product];
    });
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
