// src/api/product/product.ts

export type Product = {
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

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch("http://localhost:3001/allProducts");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
};
