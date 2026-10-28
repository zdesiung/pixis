import React from "react";
import HeroSlider from "../components/home/HeroSlider";
import BriefAbout from "../components/home/BriefAbout";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WhyChooseUs from "../components/home/WhyChooseUs";
import { Product, COMPANY_INFO } from "../data/productsData";
import { MessageCircle, FileText } from "lucide-react";
import { getWhatsAppLink } from "../utils/helpers";

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  setSelectedCategory: (cat: string) => void;
  onOpenQuoteModal: (product?: Product) => void;
}

export default function HomePage({
  setActiveTab,
  setSelectedCategory,
  onOpenQuoteModal,
}: HomePageProps) {
  return (
    <div className="space-y-0 font-sans">
      {/* Hero Banner Carousel */}
      <HeroSlider
        onExploreProducts={() => {
          setActiveTab("productos");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onOpenQuoteModal={() => onOpenQuoteModal()}
      />

      {/* Brief About Section */}
      <BriefAbout
        onLearnMore={() => {
          setActiveTab("nosotros");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* Featured Products & Category Highlights */}
      <FeaturedProducts
        onSelectCategory={(catId) => {
          setSelectedCategory(catId);
          setActiveTab("productos");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onOpenQuoteForProduct={(product) => onOpenQuoteModal(product)}
        onViewAllProducts={() => {
          setActiveTab("productos");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* Advantages */}
      <WhyChooseUs />

      {/* Final Bottom Conversion Banner */}
      <section className="py-16 bg-blue-950 text-white font-sans border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="bg-emerald-500 text-slate-950 text-xs font-black px-3 py-1 rounded-md uppercase tracking-widest inline-block mb-3">
              Atención Inmediata
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-tight">
              ¿Listo para Abastecer a Tu Empresa o Clínica?
            </h2>
            <p className="text-slate-300 text-sm font-medium mt-2 max-w-2xl leading-relaxed">
              Solicita cotización de Papel Sabanilla Blanco Ariess, Papel Higiénico Jumbo Ellia o Toallas Interfoliadas 100% Celulosa PiXis con precios directos al por mayor.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black px-6 py-3.5 rounded-xl text-sm shadow-xl flex items-center gap-2 transition cursor-pointer"
            >
              <FileText className="w-4 h-4 text-slate-950" />
              <span>Cotización en Línea</span>
            </button>

            <a
              href={getWhatsAppLink("Hola PiXis DISTRIBUIDORA, necesito cotizar productos de higiene para mi negocio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-6 py-3.5 rounded-xl text-sm shadow-xl flex items-center gap-2 transition cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp: {COMPANY_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
