import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  ShieldCheck,
  MessageCircle,
  Package,
  CheckCircle2,
  Receipt
} from "lucide-react";
import { COMPANY_INFO, CATEGORIES } from "../../data/productsData";
import { getWhatsAppLink } from "../../utils/helpers";

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
}

export default function Footer({ setActiveTab, onOpenQuoteModal }: FooterProps) {
  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-900 text-white px-3 py-1.5 rounded-xl border border-blue-700">
                <span className="text-xl font-black text-white">PiXis</span>
                <span className="text-[8px] font-black uppercase tracking-widest text-emerald-400 block text-center leading-none">
                  DISTRIBUIDORA
                </span>
              </div>
              <div>
                <span className="text-xs font-black tracking-widest text-amber-400 uppercase block leading-tight">
                  TU PROVEEDOR DE CONFIANZA
                </span>
                <span className="text-[10px] text-slate-400 block font-semibold">
                  Higiene e Insumos Institucionales
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Distribuidora especializada en papel higiénico jumbo, toallas interfoliadas, sabanilla médica, servilletas y dispensadores para empresas e instituciones.
            </p>

            <div className="pt-2">
              <span className="bg-slate-900 border border-slate-800 text-emerald-400 text-[11px] font-bold px-3 py-1.5 rounded-xl inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Garantía de Metraje Real y 100% Celulosa
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-white font-black text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <button
                  onClick={() => handleNav("inicio")}
                  className="hover:text-amber-400 flex items-center gap-1.5 transition text-slate-300 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("nosotros")}
                  className="hover:text-amber-400 flex items-center gap-1.5 transition text-slate-300 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("productos")}
                  className="hover:text-amber-400 flex items-center gap-1.5 transition text-slate-300 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
                  Catálogo de Productos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("servicios")}
                  className="hover:text-amber-400 flex items-center gap-1.5 transition text-slate-300 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
                  Servicios Institucionales
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("contacto")}
                  className="hover:text-amber-400 flex items-center gap-1.5 transition text-slate-300 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
                  Contacto & Atención
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div className="space-y-3">
            <h4 className="text-white font-black text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Categorías de Productos
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              {CATEGORIES.filter((c) => c.id !== "todos").slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleNav("productos")}
                    className="hover:text-amber-400 flex items-center gap-1.5 transition text-slate-300 cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & WhatsApp */}
          <div className="space-y-3">
            <h4 className="text-white font-black text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Central de Pedidos
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-emerald-300 font-bold">
                  WhatsApp: {COMPANY_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-emerald-300">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.schedule}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppLink("Hola PiXis DISTRIBUIDORA, deseo información de precios y catálogo.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition text-xs shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Escribir por WhatsApp ({COMPANY_INFO.phoneFormatted})</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} PiXis DISTRIBUIDORA. Todos los derechos reservados. Tu Proveedor de Confianza.</p>
          <div className="flex items-center gap-6 font-bold">
            <button onClick={onOpenQuoteModal} className="hover:text-white transition cursor-pointer">
              Cotización Rápida
            </button>
            <button onClick={() => handleNav("contacto")} className="hover:text-white transition cursor-pointer">
              Atención Directa
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
