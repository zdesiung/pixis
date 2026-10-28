import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Package,
  MessageCircle,
  FileText,
  Truck,
  Zap,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import Button from "../common/Button";
import { getWhatsAppLink } from "../../utils/helpers";
import { COMPANY_INFO } from "../../data/productsData";

interface HeroSliderProps {
  onExploreProducts: () => void;
  onOpenQuoteModal: () => void;
}

export default function HeroSlider({ onExploreProducts, onOpenQuoteModal }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "PiXis DISTRIBUIDORA",
      subtitle: "TU PROVEEDOR DE CONFIANZA",
      description: "Calidad, Rapidez y los Mejores Precios para Tu Empresa. Abastecimiento garantizado de papel higiénico jumbo, toallas interfoliadas, sabanilla y dispensadores.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80",
      badge: "Precios Mayoristas e Institucionales",
      highlight: "Atención Inmediata WhatsApp: " + COMPANY_INFO.phoneFormatted,
      ctaText: "Cotizar por WhatsApp"
    },
    {
      title: "Papel Sabanilla Blanco Ariess",
      subtitle: "LINEA INSTITUCIONAL EL PACÍFICO",
      description: "Papel Sabanilla Blanco en Bolsa (8 rollos x 50 mts). Ultra suave, textura firme y 100% Celulosa Virgen. Ideal para clínicas, hospitales, spas, consultorios y hoteles.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1920&q=80",
      badge: "100% Celulosa Virgen",
      highlight: "Envíos directos a clínicas y hospitales",
      ctaText: "Cotizar Sabanilla"
    },
    {
      title: "Papel Higiénico Jumbo Ellia & Ariess",
      subtitle: "ROLLOS DE 300M, 400M, 500M Y 550M EN CAJAS Y FARDOS",
      description: "Máximo rendimiento para baños institucionales de alto tráfico. Disponibles en rollos sueltos y cajas de 20 y 30 rollos doble hoja.",
      image: "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=1920&q=80",
      badge: "Alto Rendimiento Jumbo",
      highlight: "Cajas x 20 y x 30 Rollos (Cod. ARP0000026)",
      ctaText: "Cotizar Higiénico Jumbo"
    },
    {
      title: "Toallas Interfoliadas & Servilletas",
      subtitle: "100% CELULOSA EN CAJA X 20 PAQUETES",
      description: "Toallas interfoliadas Z-fold, servilletas dobladas en 4 y cortadas. Marcas PiXis y Ellia de máxima blancura y absorción.",
      image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=1920&q=80",
      badge: "Caja x 20 Paquetes Interfoliadas",
      highlight: "Servilletas Blancas Cod. ELLSV000002",
      ctaText: "Cotizar Interfoliadas"
    },
    {
      title: "Dispensadores & Toallas de Papel Gofrado",
      subtitle: "EQUIPAMIENTO COMPLETO PARA TU NEGOCIO",
      description: "Dispensadores para papel jumbo, toalla interfoliada, jabón líquido y alcohol. Sistema de toallas gofradas 175m y 200m hoja por hoja.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&q=80",
      badge: "Dispensadores Anti-vandalismo",
      highlight: "Abastecimiento a Empresas e Instituciones",
      ctaText: "Cotizar Dispensadores"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative bg-slate-950 text-white overflow-hidden min-h-[520px] sm:min-h-[580px] flex items-center font-sans">
      {/* Background Image Carousel with Darkness Gradient */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20"></div>
        </div>
      ))}

      {/* Main Slide Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-extrabold uppercase tracking-widest mb-4">
            <Zap className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>{slides[currentSlide].badge}</span>
          </div>

          {/* Subtitle & Title */}
          <p className="text-amber-400 font-black text-xs sm:text-sm tracking-widest uppercase mb-1">
            {slides[currentSlide].subtitle}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4">
            {slides[currentSlide].title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            {slides[currentSlide].description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={getWhatsAppLink(`Hola PiXis DISTRIBUIDORA, deseo cotizar: ${slides[currentSlide].title}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black px-6 py-3.5 rounded-xl transition text-sm shadow-xl shadow-emerald-500/30 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current text-slate-950" />
              <span>{slides[currentSlide].ctaText}</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-extrabold px-5 py-3.5 rounded-xl border border-blue-700 transition text-sm cursor-pointer shadow-lg"
            >
              <FileText className="w-5 h-5" />
              <span>Solicitar Cotización</span>
            </button>

            <button
              onClick={onExploreProducts}
              className="inline-flex items-center gap-2 bg-slate-900/80 hover:bg-white hover:text-slate-950 text-white font-extrabold px-5 py-3.5 rounded-xl border border-slate-700 transition text-sm cursor-pointer"
            >
              <Package className="w-5 h-5" />
              <span>Ver Catálogo</span>
            </button>
          </div>

          {/* Highlights tag */}
          <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center gap-2 text-xs font-bold text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{slides[currentSlide].highlight}</span>
          </div>
        </div>
      </div>

      {/* Navigation Arrow Controls */}
      <div className="absolute z-30 bottom-6 right-6 flex items-center gap-2">
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          className="p-3 bg-slate-900/90 hover:bg-emerald-500 hover:text-slate-950 text-white border border-slate-700 rounded-full backdrop-blur-md transition cursor-pointer"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="p-3 bg-slate-900/90 hover:bg-emerald-500 hover:text-slate-950 text-white border border-slate-700 rounded-full backdrop-blur-md transition cursor-pointer"
          aria-label="Siguiente slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide dots */}
      <div className="absolute z-30 bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentSlide ? "w-8 bg-emerald-400" : "w-2.5 bg-slate-600"
            }`}
            aria-label={`Ir al slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
