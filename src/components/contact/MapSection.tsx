import React from "react";
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from "lucide-react";
import { COMPANY_INFO } from "../../data/productsData";

export default function MapSection() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-lg overflow-hidden font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left Info Panel */}
        <div className="p-8 bg-slate-950 text-white flex flex-col justify-between">
          <div>
            <span className="text-emerald-400 font-black text-xs uppercase tracking-widest block mb-1">
              Almacén Central & Pedidos
            </span>
            <h3 className="text-2xl font-black text-white mb-6">
              PiXis DISTRIBUIDORA
            </h3>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-0.5">Ubicación y Atención</h4>
                  <p className="leading-relaxed">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-0.5">WhatsApp Pedidos</h4>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-emerald-300 font-bold transition">
                    {COMPANY_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-0.5">Correo de Ventas</h4>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-emerald-300 transition">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-0.5">Horarios de Recepción y Despacho</h4>
                  <p>{COMPANY_INFO.schedule}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition text-xs shadow-md cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>Ver Ubicación en Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>

        {/* Right Map Visual Canvas */}
        <div className="lg:col-span-2 relative min-h-[380px] bg-slate-200 overflow-hidden flex items-center justify-center">
          <iframe
            title="Ubicación PiXis DISTRIBUIDORA"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661703632975!2d-99.133208!3d19.432608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTkuNDMyNjA4LCAtOTkuMTMzMjA4!5e0!3m2!1ses!2smx!4v1620000000000!5m2!1ses!2smx"
            className="w-full h-full min-h-[380px] border-0 grayscale hover:grayscale-0 transition duration-500"
            allowFullScreen={false}
            loading="lazy"
          ></iframe>

          <div className="absolute top-6 left-6 bg-slate-950/90 text-white p-4 rounded-2xl border border-slate-700 backdrop-blur-md shadow-2xl max-w-xs pointer-events-none">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <h5 className="font-black text-xs text-white">PiXis DISTRIBUIDORA</h5>
            </div>
            <p className="text-[11px] text-slate-300 font-medium">
              Almacén central e insumos institucionales de higiene.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
