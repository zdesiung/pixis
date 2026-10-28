import React, { useState } from "react";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import ProductosPage from "./pages/ProductosPage";
import ServiciosPage from "./pages/ServiciosPage";
import ContactoPage from "./pages/ContactoPage";
import { Product } from "./data/productsData";

export default function App() {
  const [activeTab, setActiveTab] = useState("inicio");
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<Product | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleOpenQuote = (product?: Product) => {
    setSelectedProductForQuote(product || null);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
    setSelectedProductForQuote(null);
  };

  const renderCurrentPage = () => {
    switch (activeTab) {
      case "inicio":
        return (
          <HomePage
            setActiveTab={setActiveTab}
            setSelectedCategory={setSelectedCategory}
            onOpenQuoteModal={handleOpenQuote}
          />
        );
      case "nosotros":
        return (
          <NosotrosPage
            onOpenQuoteModal={handleOpenQuote}
          />
        );
      case "productos":
        return (
          <ProductosPage
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onOpenQuoteModal={handleOpenQuote}
          />
        );
      case "servicios":
        return (
          <ServiciosPage
            onOpenQuoteModal={handleOpenQuote}
          />
        );
      case "contacto":
        return <ContactoPage />;
      default:
        return (
          <HomePage
            setActiveTab={setActiveTab}
            setSelectedCategory={setSelectedCategory}
            onOpenQuoteModal={handleOpenQuote}
          />
        );
    }
  };

  return (
    <Layout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      selectedProductForQuote={selectedProductForQuote}
      isQuoteModalOpen={isQuoteModalOpen}
      onOpenQuoteModal={handleOpenQuote}
      onCloseQuoteModal={handleCloseQuote}
    >
      {renderCurrentPage()}
    </Layout>
  );
}
