import React, { useState } from "react";
import {
  FileText,
  Send,
  MessageCircle,
  Package,
  Calculator,
  CheckCircle2,
  Building,
  User,
  Phone,
  Mail,
  Boxes
} from "lucide-react";
import { PRODUCTS_DATA, Product, COMPANY_INFO } from "../../data/productsData";
import { getWhatsAppLink } from "../../utils/helpers";

interface QuoteFormProps {
  initialProduct?: Product;
  onSuccess?: () => void;
}

export default function QuoteForm({ initialProduct, onSuccess }: QuoteFormProps) {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    initialProduct ? initialProduct.id : PRODUCTS_DATA[0].id
  );
  const [clientName, setClientName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Custom Order Specs
  const [quantity, setQuantity] = useState<number>(10);
  const [documentType, setDocumentType] = useState("Factura Electrónica");
  const [deliveryType, setDeliveryType] = useState("Despacho Express a Dirección de Empresa");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const currentProduct = PRODUCTS_DATA.find((p) => p.id === selectedProductId) || PRODUCTS_DATA[0];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let msg = `*SOLICITUD DE COTIZACIÓN - PiXis DISTRIBUIDORA*\n\n`;
    msg += `👤 *Contacto:* ${clientName || "Cliente"}\n`;
    if (companyName) msg += `🏢 *Empresa / RUC:* ${companyName}\n`;
    msg += `📞 *Teléfono:* ${phone || "Sin especificar"}\n`;
    msg += `✉️ *Email:* ${email || "Sin especificar"}\n\n`;

    msg += `📦 *Producto:* ${currentProduct.name}\n`;
    msg += `🏷️ *Marca:* ${currentProduct.brand}\n`;
    msg += `📁 *Categoría:* ${currentProduct.categoryName}\n`;
    msg += `🔢 *Cantidad Requerida:* ${quantity} unidades / fardos / cajas\n`;
    msg += `📄 *Comprobante:* ${documentType}\n`;
    msg += `🚚 *Modalidad Entrega:* ${deliveryType}\n`;

    if (additionalNotes) {
      msg += `📝 *Notas:* ${additionalNotes}\n`;
    }

    msg += `\nSolicito disponibilidad de stock y propuesta económica comercial. ¡Muchas gracias!`;

    window.open(getWhatsAppLink(msg), "_blank");
    setSubmitted(true);
    if (onSuccess) {
      setTimeout(onSuccess, 1500);
    }
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="border-b border-slate-200 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 font-extrabold text-xs uppercase tracking-wider mb-2">
          <Calculator className="w-3.5 h-3.5 text-emerald-600" />
          Cotizador Institucional en Línea
        </div>
        <h2 className="text-2xl font-black text-slate-900">
          Solicitud de Cotización PiXis
        </h2>
        <p className="text-xs text-slate-500 mt-1 font-medium">
          Completa tus requerimientos de abastecimiento y recibe respuesta comercial directa a tu WhatsApp ({COMPANY_INFO.phoneFormatted}).
        </p>
      </div>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4 animate-in fade-in">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h3 className="text-xl font-black text-emerald-950">¡Solicitud Generada con Éxito!</h3>
          <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto font-medium">
            Redirigiendo a WhatsApp. Un asesor comercial de <strong>PiXis DISTRIBUIDORA</strong> revisará tu orden y te enviará la cotización corporativa inmediatamente.
          </p>
        </div>
      ) : (
        <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
          {/* Product Selection Dropdown */}
          <div>
            <label className="block text-xs font-black text-slate-800 mb-1">
              Seleccione el Producto Requerido:
            </label>
            <select
              value={selectedProductId}
              onChange={(e) => setSelectedProductId(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs font-bold text-slate-900 focus:ring-2 focus:ring-emerald-500 outline-none"
            >
              {PRODUCTS_DATA.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} - [{p.brand}] ({p.categoryName})
                </option>
              ))}
            </select>
          </div>

          {/* Quantities & Options Grid */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-4">
            <h4 className="text-xs font-black uppercase text-slate-800 tracking-wider flex items-center gap-1.5">
              <Boxes className="w-4 h-4 text-emerald-600" />
              Detalles de la Orden
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Cantidad (Cajas/Fardos):</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  min={1}
                  className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs font-black text-slate-900"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Tipo de Comprobante:</label>
                <select
                  value={documentType}
                  onChange={(e) => setDocumentType(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs font-medium text-slate-800"
                >
                  <option value="Factura Electrónica">Factura Electrónica con RUC</option>
                  <option value="Boleta de Venta">Boleta de Venta</option>
                  <option value="Cotización Comercial Previa">Cotización Comercial Previa</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Modalidad de Despacho:</label>
                <select
                  value={deliveryType}
                  onChange={(e) => setDeliveryType(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs font-medium text-slate-800"
                >
                  <option value="Despacho Express a Dirección">Despacho Express a Dirección</option>
                  <option value="Recojo en Almacén Central">Recojo en Almacén Central</option>
                  <option value="Envío a Provincia / Agencia">Envío a Provincia / Agencia</option>
                </select>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Nombre Completo:</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Ej. Juan Pérez / Jefe de Compras"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Empresa / RUC (Opcional):</label>
              <div className="relative">
                <Building className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Ej. Clínica San Pablo / RUC 20123456789"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Teléfono / Celular:</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ej. 962 674 574"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Correo Electrónico:</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contacto@empresa.com"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Comentarios o Especificaciones Adicionales:
            </label>
            <textarea
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              placeholder="Escribe si requieres entrega periódica, varios puntos de despacho o atención inmediata..."
              rows={2}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-2 transition cursor-pointer text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Enviar Cotización a WhatsApp ({COMPANY_INFO.phoneFormatted})</span>
            </button>
            <p className="text-[11px] text-center text-slate-500 mt-2 font-medium">
              Atención inmediata de Lunes a Sábado.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
