import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "../common/WhatsAppButton";
import QuoteForm from "../products/QuoteForm";
import { X } from "lucide-react";
import { Product } from "../../data/productsData";

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedProductForQuote?: Product | null;
  isQuoteModalOpen: boolean;
  onOpenQuoteModal: (product?: Product) => void;
  onCloseQuoteModal: () => void;
}

export default function Layout({
  children,
  activeTab,
  setActiveTab,
  selectedProductForQuote,
  isQuoteModalOpen,
  onOpenQuoteModal,
  onCloseQuoteModal,
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Global Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuoteModal={() => onOpenQuoteModal()}
      />

      {/* Main View Area */}
      <main className="flex-1">{children}</main>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Global Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenQuoteModal={() => onOpenQuoteModal()}
      />

      {/* Global Quotation Modal Dialog */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto font-sans">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative my-8">
            <button
              onClick={onCloseQuoteModal}
              className="absolute top-5 right-5 p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full transition cursor-pointer"
              aria-label="Cerrar modal de cotización"
            >
              <X className="w-5 h-5" />
            </button>

            <QuoteForm
              initialProduct={selectedProductForQuote || undefined}
              onSuccess={onCloseQuoteModal}
            />
          </div>
        </div>
      )}
    </div>
  );
}
