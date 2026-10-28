import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Truck,
  Building2,
  Award
} from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import { COMPANY_INFO } from "../../data/productsData";

interface BriefAboutProps {
  onLearnMore: () => void;
}

export default function BriefAbout({ onLearnMore }: BriefAboutProps) {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Visual Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
                  alt="Papel Sabanilla Blanco Ariess"
                  className="rounded-3xl shadow-xl object-cover h-64 w-full border border-slate-200"
                />
                <img
                  src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=80"
                  alt="Toallas Interfoliadas Celulosa"
                  className="rounded-3xl shadow-xl object-cover h-48 w-full border border-slate-200"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=800&q=80"
                  alt="Papel Higiénico Jumbo Ellia"
                  className="rounded-3xl shadow-xl object-cover h-48 w-full border border-slate-200"
                />
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                  alt="Almacén de Distribución PiXis"
                  className="rounded-3xl shadow-xl object-cover h-64 w-full border border-slate-200"
                />
              </div>
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-slate-950 text-white p-5 rounded-2xl shadow-2xl border border-slate-800 flex items-center gap-4">
              <div className="p-3 bg-emerald-500 rounded-xl text-slate-950 font-black text-2xl">
                PiXis
              </div>
              <div>
                <p className="font-black text-sm text-white">TU PROVEEDOR DE CONFIANZA</p>
                <p className="text-xs text-amber-400 font-bold">Distribuidor Oficial de Celulosa</p>
              </div>
            </div>
          </div>

          {/* Right Column: Company Description */}
          <div>
            <SectionTitle
              align="left"
              subtitle="Quiénes Somos"
              title="PiXis DISTRIBUIDORA: Calidad, Rapidez y Mejores Precios"
              description="Somos distribuidores especializados en abastecimiento de productos de higiene e insumos institucionales para empresas, clínicas, hospitales, hoteles, restaurantes e industrias."
            />

            <p className="text-slate-600 text-sm leading-relaxed mb-6 -mt-4">
              Suministramos soluciones integrales con stock permanente en Papel Sabanilla Blanco Ariess, Papel Higiénico Jumbo Ellia, Toallas Interfoliadas 100% Celulosa, Servilletas Dobladas & Cortadas y Dispensadores Institucionales.
            </p>

            {/* Key Bullet Points */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">Garantía de Metraje Real y 100% Celulosa</h4>
                  <p className="text-xs text-slate-500">Rollos de 300m, 400m, 500m y 550m con certificación de máxima absorción y suavidad.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">Emisión Inmediata de Factura y Boleta</h4>
                  <p className="text-xs text-slate-500">Atención profesional a requerimientos corporativos, licitaciones y compras por volumen.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">Despacho Express y Pedidos por WhatsApp</h4>
                  <p className="text-xs text-slate-500">Atención directa e inmediata al {COMPANY_INFO.phoneFormatted} para envíos rápidos a tu sede.</p>
                </div>
              </div>
            </div>

            {/* Stats Counter Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-8">
              {COMPANY_INFO.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <span className="block text-xl font-black text-blue-900">{stat.value}</span>
                  <span className="text-[11px] font-bold text-slate-600">{stat.label}</span>
                </div>
              ))}
            </div>

            <Button
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              onClick={onLearnMore}
            >
              Conocer Más de Nosotros
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
