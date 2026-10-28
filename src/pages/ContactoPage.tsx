import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import ContactForm from "../components/contact/ContactForm";
import MapSection from "../components/contact/MapSection";
import { COMPANY_INFO } from "../data/productsData";
import { Phone, Mail, Clock, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";
import { getWhatsAppLink } from "../utils/helpers";

export default function ContactoPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 space-y-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Atención Inmediata"
          title="Contacto y Central de Pedidos PiXis"
          description="Atendemos pedidos corporativos, cotizaciones por volumen y consultas de abastecimiento para todo el país."
        />

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md flex items-start gap-4">
            <div className="p-3 bg-emerald-100 text-emerald-800 rounded-2xl">
              <MessageCircle className="w-6 h-6 fill-current text-emerald-600" />
            </div>
            <div>
              <h4 className="font-black text-slate-900 text-sm mb-1">WhatsApp Pedidos</h4>
              <p className="text-xs text-slate-500 mb-2 font-medium">Atención directa por nuestro equipo comercial.</p>
              <a
                href={getWhatsAppLink("Hola PiXis DISTRIBUIDORA, quisiera comunicarme con un asesor de ventas.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-black text-emerald-700 hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>{COMPANY_INFO.phoneFormatted}</span>
                <span>→</span>
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md flex items-start gap-4">
            <div className="p-3 bg-blue-100 text-blue-900 rounded-2xl">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-slate-900 text-sm mb-1">Línea Telefónica</h4>
              <p className="text-xs text-slate-500 mb-2 font-medium">Atención a empresas e instituciones públicas.</p>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-xs font-black text-blue-900 hover:underline"
              >
                {COMPANY_INFO.phoneFormatted}
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md flex items-start gap-4">
            <div className="p-3 bg-amber-100 text-amber-800 rounded-2xl">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-slate-900 text-sm mb-1">Correo Corporativo</h4>
              <p className="text-xs text-slate-500 mb-2 font-medium">Recepción de licitaciones y órdenes de compra.</p>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-xs font-black text-amber-700 hover:underline"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form & Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">
          <ContactForm />

          <div className="space-y-6">
            <div className="bg-slate-950 text-white p-8 rounded-3xl border border-slate-800 shadow-lg space-y-4">
              <span className="text-emerald-400 font-black text-xs uppercase tracking-widest block">
                Tu Proveedor de Confianza
              </span>
              <h3 className="text-xl font-black text-white">
                ¿Necesitas Factura Electrónica y Muestras de Producto?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Atendemos de forma personalizada a clínicas, hospitales, hoteles, cadenas de restaurantes, colegios e industrias. Te enviamos ficha técnica y muestras según requerimiento.
              </p>
              <div className="pt-2">
                <a
                  href={getWhatsAppLink("Hola PiXis DISTRIBUIDORA, deseo solicitar fichas técnicas y cotización oficial.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black px-5 py-2.5 rounded-xl text-xs transition shadow cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-slate-950" />
                  <span>Contactar por WhatsApp ({COMPANY_INFO.phoneFormatted})</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md space-y-3">
              <h4 className="font-black text-slate-900 text-sm flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                Horarios de Atención y Despacho
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                • Lunes a Viernes: 8:00 AM - 6:00 PM
                <br />
                • Sábados: 8:00 AM - 1:30 PM
                <br />
                • Despachos programados a todo el país.
              </p>
            </div>
          </div>
        </div>

        {/* Location Map */}
        <MapSection />
      </div>
    </div>
  );
}
