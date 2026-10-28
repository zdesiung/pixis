import React from "react";
import {
  Package,
  ArrowRight,
  FileText,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Box,
  Layers,
  Disc,
  Grid
} from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import { PRODUCTS_DATA, CATEGORIES, Product } from "../../data/productsData";
import { getWhatsAppLink } from "../../utils/helpers";

interface FeaturedProductsProps {
  onSelectCategory: (catId: string) => void;
  onOpenQuoteForProduct: (product: Product) => void;
  onViewAllProducts: () => void;
}

export default function FeaturedProducts({
  onSelectCategory,
  onOpenQuoteForProduct,
  onViewAllProducts,
}: FeaturedProductsProps) {
  const featuredList = PRODUCTS_DATA.filter((p) => p.featured).slice(0, 8);

  return (
    <section className="py-16 sm:py-24 bg-slate-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Catálogo Especializado"
          title="Nuestra Línea Principal de Productos e Insumos"
          description="Papel Sabanilla Blanco Ariess, Papel Higiénico Jumbo Ellia, Toallas Interfoliadas 100% Celulosa, Servilletas y Dispensadores."
        />

        {/* Category Cards Overview Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {CATEGORIES.filter((c) => c.id !== "todos").slice(0, 10).map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-3 group-hover:bg-blue-900 group-hover:text-white transition">
                  <Package className="w-5 h-5 text-blue-800 group-hover:text-amber-400" />
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 mb-1 group-hover:text-blue-900 transition leading-tight">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed mb-3">
                  {cat.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-blue-900 group-hover:text-amber-600">
                <span>Ver productos</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Featured Products Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-slate-100 pb-6">
            <div>
              <span className="text-xs font-black text-amber-600 uppercase tracking-wider block">
                Los Más Solicitados por Empresas y Clínicas
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                Productos Destacados PiXis Distribuidora
              </h3>
            </div>

            <Button
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
              onClick={onViewAllProducts}
            >
              Ver Catálogo Completo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredList.map((product) => (
              <div
                key={product.id}
                className="bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:shadow-xl transition duration-300 group"
              >
                <div>
                  {/* Image & Badge */}
                  <div className="relative h-48 overflow-hidden bg-white p-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition duration-500"
                    />
                    {product.badge && (
                      <span className="absolute top-4 left-4 bg-blue-900 text-amber-300 font-black text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider shadow">
                        {product.badge}
                      </span>
                    )}
                    <span className="absolute top-4 right-4 bg-emerald-500 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded shadow">
                      {product.brand}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-4">
                    <span className="text-[10px] font-black text-blue-800 uppercase tracking-widest block mb-1">
                      {product.categoryName}
                    </span>
                    <h4 className="font-black text-slate-900 text-sm line-clamp-2 mb-2 group-hover:text-blue-900 transition leading-snug">
                      {product.name}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                      {product.shortDesc}
                    </p>

                    {/* Specs snippet */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200/80 text-[11px] text-slate-700 space-y-1.5 mb-2 font-medium">
                      {product.specs.meters && (
                        <div className="flex justify-between">
                          <span className="text-slate-500 font-semibold">Metraje:</span>
                          <span className="font-black text-blue-950">{product.specs.meters}</span>
                        </div>
                      )}
                      {product.specs.presentation && (
                        <div className="flex justify-between">
                          <span className="text-slate-500 font-semibold">Presentación:</span>
                          <span className="font-bold text-slate-800">{product.specs.presentation}</span>
                        </div>
                      )}
                      {product.specs.code && (
                        <div className="flex justify-between">
                          <span className="text-slate-500 font-semibold">Código:</span>
                          <span className="font-extrabold text-amber-700">{product.specs.code}</span>
                        </div>
                      )}
                      <div className="flex justify-between pt-1 border-t border-slate-100">
                        <span className="text-slate-500 font-semibold">Mínimo:</span>
                        <span className="font-black text-emerald-700">{product.specs.moq}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Quote Action */}
                <div className="p-4 pt-0 gap-2 flex flex-col">
                  <Button
                    variant="primary"
                    size="sm"
                    fullWidth
                    icon={<FileText className="w-3.5 h-3.5" />}
                    onClick={() => onOpenQuoteForProduct(product)}
                  >
                    Cotizar Producto
                  </Button>

                  <a
                    href={getWhatsAppLink(`Hola PiXis DISTRIBUIDORA, quisiera cotizar el producto: ${product.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-black rounded-xl text-[11px] flex items-center justify-center gap-1.5 transition border border-emerald-300"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current text-emerald-600" />
                    <span>WhatsApp Directo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
