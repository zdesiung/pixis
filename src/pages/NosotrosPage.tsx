import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import { COMPANY_INFO, Product } from "../data/productsData";
import {
  ShieldCheck,
  Target,
  Eye,
  CheckCircle2,
  FileText,
  MessageCircle,
  Truck,
  Building2
} from "lucide-react";
import Button from "../components/common/Button";
import { getWhatsAppLink } from "../utils/helpers";

interface NosotrosPageProps {
  onOpenQuoteModal: (product?: Product) => void;
}

export default function NosotrosPage({ onOpenQuoteModal }: NosotrosPageProps) {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 space-y-16 font-sans">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Trayectoria y Confianza"
          title="Quiénes Somos en PiXis DISTRIBUIDORA"
          description="Especialistas en abastecimiento y distribución de productos de higiene e insumos institucionales para empresas, hospitales, clínicas, hoteles y restaurantes."
        />

        {/* Hero Image & Key Pillars */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-amber-600 font-black text-xs uppercase tracking-widest block mb-2">
              Distribuidora Oficial de Confianza
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
              Calidad, Rapidez y los Mejores Precios para Tu Empresa
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-medium">
              En PiXis DISTRIBUIDORA trabajamos con las mejores marcas del mercado como Ariess, Ellia y nuestra línea propia PiXis. Garantizamos el abastecimiento continuo de papel higiénico jumbo, papel sabanilla blanco, toallas interfoliadas 100% celulosa, servilletas y dispensadores institucionales.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
              Suministramos a cientos de instituciones públicas y privadas a nivel nacional, brindando comprobantes oficiales de Factura y Boleta electrónica y despacho rápido.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="block text-2xl font-black text-blue-900">100%</span>
                <span className="text-xs font-bold text-slate-600">Celulosa Virgen Certificada</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="block text-2xl font-black text-emerald-700">24 Hrs</span>
                <span className="text-xs font-bold text-slate-600">Atención y Despacho Express</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
              alt="Central de Distribución PiXis"
              className="rounded-2xl shadow-xl object-cover h-96 w-full border border-slate-200"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-4 rounded-xl text-white text-xs border border-slate-700">
              <span className="font-black text-emerald-400 block mb-0.5">Central de Distribución e Insumos</span>
              <span className="font-medium text-slate-300">Stock garantizado de Papel Sabanilla, Jumbo e Interfoliadas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 bg-emerald-500 text-slate-950 rounded-2xl flex items-center justify-center font-black">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">
                Nuestra Misión
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Proveer productos de higiene institucional de alta calidad y metraje garantizado, asegurando una atención rápida, eficiente y al mejor costo comercial para fortalecer la salubridad e imagen de nuestros clientes.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 bg-blue-900 text-white rounded-2xl flex items-center justify-center font-black">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">
                Nuestra Visión
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Ser la distribuidora líder y preferida por el sector corporativo, médico, hostelero e industrial en soluciones de higiene, reconocida por nuestra puntualidad de entrega y excelencia en el servicio.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Standards & Direct WhatsApp Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <span className="bg-emerald-500/20 text-emerald-300 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              Garantía de Suministro
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Suministro Directo e Ininterrumpido a Tu Negocio
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              Garantizamos fardos y cajas con metraje exacto en papel higiénico jumbo, toallas de papel gofrado y sabanilla médica Ariess.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <span className="font-black text-amber-400 block mb-1">Empresas e Instituciones</span>
                <p className="text-slate-300 font-medium">Atención especial a contratos periódicos de reposición y abastecimiento.</p>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <span className="font-black text-emerald-400 block mb-1">Factura y Boleta Electrónica</span>
                <p className="text-slate-300 font-medium">Emisión inmediata de comprobantes para contabilidad corporativa.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-center lg:text-left bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto lg:mx-0" />
            <h4 className="font-black text-base text-white">¿Necesitas Asesoría Comercial?</h4>
            <p className="text-xs text-slate-300 font-medium">
              Escríbenos directamente a nuestro WhatsApp oficial ({COMPANY_INFO.phoneFormatted}).
            </p>
            <a
              href={getWhatsAppLink("Hola PiXis DISTRIBUIDORA, deseo comunicarme con un asesor comercial.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Contactar Asesor por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
