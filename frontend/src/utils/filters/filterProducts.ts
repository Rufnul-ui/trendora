import type { Product } from "@/components/Shop/Shop";

const filterProducts = (
  products: Product[],
  selectedCategory: string[],
  selectedPriceRange: string[],
  selectedColors: string[],
  selectedSizes: string[],
): Product[] => {
  const filteredCategory =
    selectedCategory.length === 0
      ? products
      : products.filter((product) =>
          selectedCategory.some((category) =>
            product.category.includes(category),
          ),
        );

  const filteredPrice =
    selectedPriceRange.length === 0
      ? filteredCategory
      : filteredCategory.filter((product) =>
          selectedPriceRange.some((price) => {
            if (price === "Under ₹1,000") {
              return product.price < 1000;
            }

            if (price === "₹1,000 - ₹2,000") {
              return product.price >= 1000 && product.price <= 2000;
            }

            if (price === "₹2,000 - ₹5,000") {
              return product.price > 2000 && product.price <= 5000;
            }

            if (price === "Above ₹5,000") {
              return product.price > 5000;
            }

            return false;
          }),
        );

  const filteredColors =
    selectedColors.length === 0
      ? filteredPrice
      : filteredPrice.filter((product) =>
          selectedColors.some((color) => product.colors.includes(color)),
        );

  const filteredSizes =
    selectedSizes.length === 0
      ? filteredColors
      : filteredColors.filter((product) =>
          selectedSizes.some((size) => product.sizes.includes(size)),
        );

  return filteredSizes;
};

export default filterProducts;
