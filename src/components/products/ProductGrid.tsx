import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Package,
  MessageCircle,
  FileText
} from "lucide-react";
import { PRODUCTS_DATA, CATEGORIES, Product, COMPANY_INFO } from "../../data/productsData";
import ProductCard from "./ProductCard";
import SectionTitle from "../common/SectionTitle";
import { getWhatsAppLink } from "../../utils/helpers";

interface ProductGridProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  onOpenQuote: (product: Product) => void;
}

export default function ProductGrid({
  selectedCategory,
  setSelectedCategory,
  onOpenQuote,
}: ProductGridProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      const matchesCategory =
        selectedCategory === "todos" || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.categoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.specs.code && p.specs.code.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <section className="py-12 sm:py-20 bg-slate-50 min-h-[70vh] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Catálogo Completo"
          title="Productos e Insumos Institucionales PiXis"
          description="Encuentra papel higiénico jumbo, toallas interfoliadas, sabanilla médica, servilletas y dispensadores con precios directos por mayor."
        />

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200/80 shadow-md mb-10 space-y-4">
          {/* Top Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por producto, marca (Ariess, Ellia, PiXis) o código..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-11 pr-4 py-2.5 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-black text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  Limpiar
                </button>
              )}
            </div>

            <div className="text-xs font-black text-slate-600 flex items-center gap-2">
              <Filter className="w-4 h-4 text-emerald-600" />
              <span>Mostrando {filteredProducts.length} de {PRODUCTS_DATA.length} productos</span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-black whitespace-nowrap transition cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? "bg-blue-900 text-white shadow-md font-black"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenQuote={onOpenQuote}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto my-8">
            <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-black text-slate-900 mb-1">
              No se encontraron productos
            </h3>
            <p className="text-xs text-slate-500 mb-6 font-medium">
              Intente con otro término de búsqueda o seleccione otra categoría. También te atendemos de forma personalizada por WhatsApp.
            </p>
            <a
              href={getWhatsAppLink(`Hola PiXis DISTRIBUIDORA, busco un producto que no encontré: "${searchTerm}"`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 px-5 rounded-xl text-xs shadow cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Consultar por WhatsApp ({COMPANY_INFO.phoneFormatted})</span>
            </a>
          </div>
        )}

        {/* Custom Order Callout Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white p-8 sm:p-10 rounded-3xl border border-blue-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-emerald-400 font-black text-xs uppercase tracking-widest block mb-1">
              ¿Requiere Pedidos por Volumen o Licitaciones Corporativas?
            </span>
            <h3 className="text-2xl font-black text-white mb-2">
              PiXis DISTRIBUIDORA - Tu Proveedor de Confianza
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-medium">
              Atendemos requerimientos mayoristas para clínicas, hospitales, cadenas de hoteles, restaurantes, empresas e industrias con precios preferenciales.
            </p>
          </div>

          <a
            href={getWhatsAppLink("Hola PiXis DISTRIBUIDORA, deseo cotizar un pedido especial mayorista para mi empresa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black px-6 py-3.5 rounded-xl text-sm shadow-xl shadow-emerald-500/20 flex items-center gap-2 transition cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current text-slate-950" />
            <span>Atención WhatsApp: {COMPANY_INFO.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
