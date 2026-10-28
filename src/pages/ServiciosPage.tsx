import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import { SERVICES_DATA, Product, COMPANY_INFO } from "../data/productsData";
import {
  Truck,
  ShieldCheck,
  Building,
  CheckCircle2,
  FileText,
  MessageCircle,
  ArrowRight,
  HelpCircle,
  Receipt
} from "lucide-react";
import Button from "../components/common/Button";
import { getWhatsAppLink } from "../utils/helpers";

interface ServiciosPageProps {
  onOpenQuoteModal: (product?: Product) => void;
}

export default function ServiciosPage({ onOpenQuoteModal }: ServiciosPageProps) {
  const getServiceIcon = (icon: string) => {
    switch (icon) {
      case "Building":
        return <Building className="w-6 h-6 text-emerald-600" />;
      case "Truck":
        return <Truck className="w-6 h-6 text-emerald-600" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      default:
        return <Receipt className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="py-12 sm:py-20 bg-slate-50 space-y-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Atención Corporativa"
          title="Servicios y Abastecimiento Institucional PiXis"
          description="Ofrecemos soluciones integrales de reposición periódica, facturación inmediata y asesoría en equipamiento de higiene."
        />

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-md overflow-hidden flex flex-col justify-between hover:shadow-xl transition duration-300"
            >
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                  <div className="p-3 bg-slate-900 rounded-2xl text-emerald-400 font-bold shadow-lg border border-slate-800">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                  {service.desc}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onOpenQuoteModal()}
                    className="text-xs font-black text-emerald-700 hover:text-blue-900 flex items-center gap-1 transition cursor-pointer"
                  >
                    <span>Solicitar cotización corporativa</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={getWhatsAppLink(`Hola PiXis DISTRIBUIDORA, deseo información de: ${service.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl hover:bg-emerald-100 transition cursor-pointer"
                    title="Consultar por WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Callout for Corporate Quotations */}
        <div className="mt-16 bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <span className="text-emerald-400 font-black text-xs uppercase tracking-widest block">
              Atención Telefónica y WhatsApp
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              ¿Requieres un Plan Mensual de Abastecimiento?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              Diseñamos programas de entrega programada de papel sabanilla, papel higiénico jumbo y toallas de papel para que tu clínica, laboratorio o empresa nunca se quede sin insumos vitales.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1.5 rounded-xl border border-slate-800 font-semibold">
                • Precios Preferenciales de Distribuidor
              </span>
              <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1.5 rounded-xl border border-slate-800 font-semibold">
                • Factura / Boleta Electrónica
              </span>
              <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1.5 rounded-xl border border-slate-800 font-semibold">
                • Marcas Ariess, Ellia, PiXis
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              variant="emerald"
              size="lg"
              fullWidth
              icon={<FileText className="w-4 h-4" />}
              onClick={() => onOpenQuoteModal()}
            >
              Cotizar Plan Institucional
            </Button>

            <a
              href={getWhatsAppLink("Hola PiXis DISTRIBUIDORA, deseo coordinar un plan mensual de abastecimiento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl text-xs flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Coordinar por WhatsApp ({COMPANY_INFO.phoneFormatted})</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
