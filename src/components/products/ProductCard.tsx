import React, { useState } from "react";
import {
  FileText,
  MessageCircle,
  Eye,
  X,
  CheckCircle2,
  ShieldCheck,
  Package
} from "lucide-react";
import { Product } from "../../data/productsData";
import Button from "../common/Button";
import { getWhatsAppLink, getProductQuoteWhatsAppMessage } from "../../utils/helpers";

interface ProductCardProps {
  key?: string;
  product: Product;
  onOpenQuote: (product: Product) => void;
}

export default function ProductCard({ product, onOpenQuote }: ProductCardProps) {
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(product.image);

  return (
    <>
      <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between group font-sans">
        <div>
          {/* Top Image Box */}
          <div className="relative h-52 bg-slate-100 overflow-hidden p-2">
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

            <button
              onClick={() => setDetailModalOpen(true)}
              className="absolute bottom-4 right-4 p-2 bg-slate-950/80 hover:bg-slate-950 text-white rounded-xl backdrop-blur-sm transition opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg"
              title="Ver ficha técnica"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>

          {/* Product Info */}
          <div className="p-5">
            <div className="flex items-center justify-between text-[10px] font-black text-blue-900 uppercase tracking-wider mb-1">
              <span>{product.categoryName}</span>
              <span className="text-emerald-700">Mínimo: {product.specs.moq}</span>
            </div>

            <h3 className="text-base font-black text-slate-900 mb-2 group-hover:text-blue-900 transition line-clamp-2 leading-snug">
              {product.name}
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
              {product.shortDesc}
            </p>

            {/* Quick Specs Pill */}
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-xs space-y-1.5 mb-4">
              {product.specs.meters && (
                <div className="flex justify-between items-center text-[11px]">
                  <span className="font-semibold text-slate-500">Metraje / Capacidad:</span>
                  <span className="font-black text-blue-950">{product.specs.meters}</span>
                </div>
              )}
              {product.specs.presentation && (
                <div className="flex justify-between items-center text-[11px]">
                  <span className="font-semibold text-slate-500">Presentación:</span>
                  <span className="font-bold text-slate-800 truncate max-w-[150px]">{product.specs.presentation}</span>
                </div>
              )}
              {product.specs.code && (
                <div className="flex justify-between items-center text-[11px]">
                  <span className="font-semibold text-slate-500">Código:</span>
                  <span className="font-bold text-amber-700">{product.specs.code}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Card Actions */}
        <div className="p-5 pt-0 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setDetailModalOpen(true)}
              className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold rounded-xl text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-slate-600" />
              <span>Ver Ficha</span>
            </button>

            <Button
              variant="primary"
              size="sm"
              icon={<FileText className="w-3.5 h-3.5" />}
              onClick={() => onOpenQuote(product)}
            >
              Cotizar
            </Button>
          </div>

          <a
            href={getProductQuoteWhatsAppMessage(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-extrabold rounded-xl text-[11px] flex items-center justify-center gap-1.5 transition border border-emerald-300"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current text-emerald-600" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Detail Specification Sheet Modal */}
      {detailModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 font-sans">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative">
            <button
              onClick={() => setDetailModalOpen(false)}
              className="absolute top-5 right-5 p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image Gallery */}
              <div>
                <div className="h-64 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-3 p-2">
                  <img
                    src={activeImage}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                {product.gallery.length > 1 && (
                  <div className="flex gap-2">
                    {product.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(img)}
                        className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition cursor-pointer ${
                          activeImage === img ? "border-emerald-500 scale-105" : "border-slate-200 opacity-70"
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Specification Details */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-black text-amber-600 uppercase tracking-widest">
                    {product.categoryName}
                  </span>
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                    Marca: {product.brand}
                  </span>
                </div>

                <h2 className="text-2xl font-black text-slate-900 mb-3 leading-snug">
                  {product.name}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {product.fullDesc}
                </p>

                {/* Specs Table */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-2 mb-6">
                  {product.specs.material && (
                    <div className="flex justify-between border-b border-slate-200 pb-1.5">
                      <span className="font-semibold text-slate-500">Material / Calidad:</span>
                      <span className="font-bold text-slate-900">{product.specs.material}</span>
                    </div>
                  )}
                  {product.specs.meters && (
                    <div className="flex justify-between border-b border-slate-200 pb-1.5">
                      <span className="font-semibold text-slate-500">Metraje:</span>
                      <span className="font-black text-blue-900">{product.specs.meters}</span>
                    </div>
                  )}
                  {product.specs.presentation && (
                    <div className="flex justify-between border-b border-slate-200 pb-1.5">
                      <span className="font-semibold text-slate-500">Presentación:</span>
                      <span className="font-bold text-slate-900">{product.specs.presentation}</span>
                    </div>
                  )}
                  {product.specs.code && (
                    <div className="flex justify-between border-b border-slate-200 pb-1.5">
                      <span className="font-semibold text-slate-500">Código de Producto:</span>
                      <span className="font-black text-amber-700">{product.specs.code}</span>
                    </div>
                  )}
                  <div className="flex justify-between border-b border-slate-200 pb-1.5">
                    <span className="font-semibold text-slate-500">Pedido Mínimo (MOQ):</span>
                    <span className="font-bold text-emerald-700">{product.specs.moq}</span>
                  </div>
                  <div className="pt-1">
                    <span className="font-semibold text-slate-500 block mb-1">Uso Recomendado:</span>
                    <span className="font-medium text-slate-700">{product.specs.useCase}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button
                    variant="emerald"
                    size="lg"
                    fullWidth
                    icon={<FileText className="w-4 h-4" />}
                    onClick={() => {
                      setDetailModalOpen(false);
                      onOpenQuote(product);
                    }}
                  >
                    Cotizar en Línea
                  </Button>

                  <a
                    href={getProductQuoteWhatsAppMessage(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Cotización Directa por WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
