import React from "react";
import ProductGrid from "../components/products/ProductGrid";
import { Product } from "../data/productsData";

interface ProductosPageProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  onOpenQuoteModal: (product?: Product) => void;
}

export default function ProductosPage({
  selectedCategory,
  setSelectedCategory,
  onOpenQuoteModal,
}: ProductosPageProps) {
  return (
    <div>
      <ProductGrid
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onOpenQuote={(product) => onOpenQuoteModal(product)}
      />
    </div>
  );
}
