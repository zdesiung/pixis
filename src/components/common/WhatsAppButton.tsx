import React, { useState } from "react";
import { MessageCircle, X, Send, PhoneCall, ShoppingCart, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "../../data/productsData";
import { getWhatsAppLink } from "../../utils/helpers";

interface WhatsAppButtonProps {
  customMessage?: string;
}

export default function WhatsAppButton({ customMessage }: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState("");
  const [selectedProductType, setSelectedProductType] = useState("Papel Higiénico Jumbo");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = userMsg.trim()
      ? `Hola PiXis DISTRIBUIDORA, quisiera cotizar ${selectedProductType}. Detalle: ${userMsg}`
      : `Hola PiXis DISTRIBUIDORA, me interesa solicitar información y cotización para ${selectedProductType}.`;

    window.open(getWhatsAppLink(formattedText), "_blank");
    setIsOpen(false);
    setUserMsg("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Interactive Quick Chat Modal Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-500/90 flex items-center justify-center font-bold text-white border-2 border-white/20">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-300 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <h4 className="font-extrabold text-sm leading-tight tracking-wide">PiXis DISTRIBUIDORA</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse"></span>
                  Pedidos WhatsApp: {COMPANY_INFO.phoneFormatted}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-emerald-700 rounded-lg text-emerald-100 transition cursor-pointer"
              aria-label="Cerrar chat de WhatsApp"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm text-slate-700 leading-relaxed">
              👋 ¡Hola! Bienvenido a <strong>PiXis DISTRIBUIDORA</strong>. Tu proveedor de confianza en productos de higiene e institucionales. ¿Qué producto necesitas cotizar hoy?
            </div>

            <form onSubmit={handleSend} className="space-y-3 pt-1">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Categoría o Producto de Interés:
                </label>
                <select
                  value={selectedProductType}
                  onChange={(e) => setSelectedProductType(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none"
                >
                  <option value="Papel Higiénico Jumbo">Papel Higiénico Jumbo (Rollos & Cajas)</option>
                  <option value="Papel Sabanilla Blanco">Papel Sabanilla Blanco Ariess</option>
                  <option value="Toallas Interfoliadas">Toallas Interfoliadas 100% Celulosa</option>
                  <option value="Papel Toalla Jumbo">Papel Toalla Jumbo 200m / 300m</option>
                  <option value="Servilletas">Servilletas Dobladas & Cortadas Ellia</option>
                  <option value="Dispensadores Institucionales">Dispensadores de Papel, Jabón y Alcohol</option>
                  <option value="Papel Higiénico Doméstico">Papel Higiénico Doméstico PiXis</option>
                  <option value="Toallas Papel Gofrado">Toallas de Papel Gofrado Sistema Hoja por Hoja</option>
                  <option value="Pedido Institucional General">Pedido Corporativo / Venta Mayorista</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Cantidad Estimada o Consulta (Opcional):
                </label>
                <textarea
                  value={userMsg}
                  onChange={(e) => setUserMsg(e.target.value)}
                  placeholder="Ej: Necesito 10 fardos de Papel Higiénico Jumbo 550m y 5 cajas de toallas interfoliadas para una clínica..."
                  rows={2}
                  className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 px-4 rounded-xl shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Iniciar Chat en WhatsApp ({COMPANY_INFO.phoneFormatted})</span>
              </button>
            </form>
          </div>

          <div className="px-4 py-2 bg-slate-100 text-[10px] text-center text-slate-600 border-t border-slate-200 font-medium flex items-center justify-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Precios Mayoristas • Boleta y Factura Directa</span>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        <div className="absolute -top-12 right-0 hidden sm:flex items-center gap-1.5 bg-slate-900 text-white text-[11px] font-extrabold px-3 py-1.5 rounded-xl shadow-xl border border-emerald-500/30 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>WhatsApp: {COMPANY_INFO.phoneFormatted}</span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-600/60 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label="Contactar por WhatsApp"
        >
          {/* Animated pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-70 animate-ping pointer-events-none"></span>

          <MessageCircle className="w-8 h-8 relative z-10 fill-current text-white" />

          {/* Notification badge */}
          <span className="absolute -top-1 -right-1 bg-amber-400 text-slate-950 font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow">
            1
          </span>
        </button>
      </div>
    </div>
  );
}
