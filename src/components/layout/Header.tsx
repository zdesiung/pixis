import React, { useState } from "react";
import {
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  Package,
  MessageCircle,
  ChevronDown,
  ChevronRight,
  FileText,
  Truck,
  Building2,
  Hotel,
  Utensils,
  Hospital,
  GraduationCap,
  Briefcase,
  Factory,
  ShieldCheck,
  Receipt,
  Zap,
  Users
} from "lucide-react";
import { COMPANY_INFO, CATEGORIES } from "../../data/productsData";
import { getWhatsAppLink } from "../../utils/helpers";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedCategory?: string;
  setSelectedCategory?: (cat: string) => void;
  onOpenQuoteModal: () => void;
}

export default function Header({
  activeTab,
  setActiveTab,
  setSelectedCategory,
  onOpenQuoteModal
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "productos", label: "Productos & Catálogo", hasDropdown: true },
    { id: "nosotros", label: "Nosotros" },
    { id: "servicios", label: "Servicios Institucionales" },
    { id: "contacto", label: "Contacto" },
  ];

  const handleNavClick = (id: string, categoryId?: string) => {
    setActiveTab(id);
    if (categoryId && setSelectedCategory) {
      setSelectedCategory(categoryId);
    }
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-lg border-b border-slate-200 font-sans">
      {/* 1. TOP SECTORS BAR (Empresas, Hoteles, Restaurantes, Hospitales, Colegios, Oficinas, Industrias) */}
      <div className="bg-slate-900 text-slate-200 py-1.5 px-4 text-xs font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Target Industries */}
          <div className="hidden md:flex items-center gap-4 text-[11px] font-bold text-slate-300">
            <span className="text-amber-400 font-extrabold uppercase tracking-wider text-[10px]">
              Atendemos a:
            </span>
            <span className="flex items-center gap-1 hover:text-white transition">
              <Building2 className="w-3 h-3 text-blue-400" /> EMPRESAS
            </span>
            <span className="flex items-center gap-1 hover:text-white transition">
              <Hotel className="w-3 h-3 text-blue-400" /> HOTELES
            </span>
            <span className="flex items-center gap-1 hover:text-white transition">
              <Utensils className="w-3 h-3 text-blue-400" /> RESTAURANTES
            </span>
            <span className="flex items-center gap-1 hover:text-white transition">
              <Hospital className="w-3 h-3 text-blue-400" /> HOSPITALES
            </span>
            <span className="flex items-center gap-1 hover:text-white transition">
              <GraduationCap className="w-3 h-3 text-blue-400" /> COLEGIOS
            </span>
            <span className="flex items-center gap-1 hover:text-white transition">
              <Briefcase className="w-3 h-3 text-blue-400" /> OFICINAS
            </span>
            <span className="flex items-center gap-1 hover:text-white transition">
              <Factory className="w-3 h-3 text-blue-400" /> INDUSTRIAS
            </span>
          </div>

          {/* Top Quick Phone / Delivery Badge */}
          <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-4 text-xs font-bold">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <Truck className="w-4 h-4 animate-bounce" />
              <span className="bg-emerald-500/20 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-black">
                ENTREGA RÁPIDA
              </span>
            </div>

            <a
              href={getWhatsAppLink("Hola PiXis DISTRIBUIDORA, deseo información de sus productos.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-0.5 rounded-full text-xs font-black transition shadow"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>PEDIDOS: {COMPANY_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. VALUE PROPOSITIONS BAR (Precios Mayoristas, Factura y Boleta, Entrega Rápida, Atención Personalizada) */}
      <div className="bg-blue-950 text-white py-2 px-4 border-b border-blue-900 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-extrabold uppercase tracking-wide">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>PRECIOS MAYORISTAS</span>
          </div>
          <div className="flex items-center gap-2 border-l border-blue-800 pl-4">
            <Receipt className="w-4 h-4 text-emerald-400" />
            <span>FACTURA Y BOLETA</span>
          </div>
          <div className="flex items-center gap-2 border-l border-blue-800 pl-4">
            <Truck className="w-4 h-4 text-cyan-400" />
            <span>ENTREGA RÁPIDA</span>
          </div>
          <div className="flex items-center gap-2 border-l border-blue-800 pl-4">
            <Users className="w-4 h-4 text-amber-400" />
            <span>ATENCIÓN PERSONALIZADA</span>
          </div>
          <div className="flex items-center gap-2 border-l border-blue-800 pl-4 text-emerald-400 font-black">
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WHATSAPP: {COMPANY_INFO.phoneFormatted}</span>
          </div>
        </div>
      </div>

      {/* 3. MAIN LOGO & NAVIGATION HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-22">
          {/* Logo Brand matching image */}
          <button
            onClick={() => handleNavClick("inicio")}
            className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer py-2"
          >
            <div className="bg-blue-900 text-white px-3.5 py-2 rounded-xl shadow-md border-2 border-blue-800 group-hover:bg-blue-950 transition">
              <span className="text-2xl sm:text-3xl font-black tracking-tighter text-white block leading-none">
                PiXis
              </span>
              <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400 block text-center leading-none mt-1">
                DISTRIBUIDORA
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xs font-black text-blue-950 uppercase tracking-wide block leading-tight">
                TU PROVEEDOR DE CONFIANZA
              </span>
              <span className="text-[10px] font-bold text-slate-500 block leading-tight max-w-xs">
                {COMPANY_INFO.tagline}
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 relative">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick("productos")}
                      className={`px-4 py-2.5 rounded-xl text-sm font-extrabold flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-blue-900 text-white shadow-md"
                          : "text-slate-800 hover:text-blue-900 hover:bg-slate-100"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4 opacity-75" />
                    </button>

                    {/* Products Dropdown Menu */}
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-100">
                          Categorías Principales
                        </div>
                        {CATEGORIES.map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => handleNavClick("productos", cat.id)}
                            className="w-full text-left px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-900 flex items-center justify-between transition cursor-pointer"
                          >
                            <span>{cat.name}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-extrabold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-blue-900 text-white shadow-md"
                      : "text-slate-800 hover:text-blue-900 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Direct CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-105 transition duration-200 flex items-center gap-2 cursor-pointer border border-emerald-400"
            >
              <FileText className="w-4 h-4" />
              <span>Solicitar Cotización</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 transition cursor-pointer"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 text-white border-t border-slate-800 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-extrabold flex items-center justify-between ${
                    isActive
                      ? "bg-blue-800 text-white"
                      : "text-slate-200 hover:bg-slate-800"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </button>
              );
            })}
          </div>

          {/* Quick Categories in Mobile */}
          <div className="pt-3 border-t border-slate-800">
            <p className="text-[11px] font-black uppercase text-amber-400 px-2 mb-2">
              Secciones del Catálogo:
            </p>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              {CATEGORIES.filter((c) => c.id !== "todos").map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleNavClick("productos", cat.id)}
                  className="text-left bg-slate-900 hover:bg-slate-800 text-slate-300 p-2 rounded-lg font-bold border border-slate-800 truncate"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg"
            >
              <FileText className="w-4 h-4" />
              <span>Solicitar Cotización de Productos</span>
            </button>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Pedidos WhatsApp: {COMPANY_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
