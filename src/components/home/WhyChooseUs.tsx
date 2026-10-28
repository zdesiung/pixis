import React from "react";
import {
  Truck,
  ShieldCheck,
  Zap,
  Receipt,
  Users,
  CheckCircle2,
  PackageCheck
} from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import { COMPANY_INFO } from "../../data/productsData";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: <Zap className="w-8 h-8 text-amber-400" />,
      title: "Precios Mayoristas",
      desc: "Tarifas competitivas de distribuidor directo para empresas, revendedores y clientes institucionales por caja o fardo."
    },
    {
      icon: <Receipt className="w-8 h-8 text-emerald-400" />,
      title: "Factura y Boleta Electrónica",
      desc: "Emisión inmediata de comprobantes de pago oficial para sustentar compras corporativas e impuestos."
    },
    {
      icon: <Truck className="w-8 h-8 text-cyan-400" />,
      title: "Entrega Rápida y Segura",
      desc: "Despachos inmediatos a la puerta de tu empresa, clínica, hotel o negocio con seguimiento directo."
    },
    {
      icon: <Users className="w-8 h-8 text-amber-400" />,
      title: "Atención Personalizada",
      desc: "Asesoría constante por WhatsApp (" + COMPANY_INFO.phoneFormatted + ") para elegir los metrajes y productos idóneos."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden font-sans">
      {/* Background Subtle Shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          light
          subtitle="Ventajas Exclusivas"
          title="¿Por Qué Elegir a PiXis Distribuidora?"
          description="Brindamos la máxima seguridad, higiene y rapidez en el abastecimiento de insumos institucionales."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="p-3 bg-slate-950 rounded-xl w-fit border border-slate-800 mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[11px] font-extrabold text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Garantía PiXis</span>
              </div>
            </div>
          ))}
        </div>

        {/* Value Highlights Bar matching flyer bottom */}
        <div className="mt-16 p-6 bg-blue-950/80 rounded-2xl border border-blue-900 flex flex-wrap items-center justify-around gap-6 text-center text-xs text-slate-200">
          <div>
            <span className="block font-black text-amber-300 text-base">VENTAS AL POR MAYOR Y MENOR</span>
            <span className="text-slate-400">Atención a Todo Volumen</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-blue-900"></div>
          <div>
            <span className="block font-black text-emerald-400 text-base">ABASTECEMOS EMPRESAS E INSTITUCIONES</span>
            <span className="text-slate-400">Hoteles, Clínicas, Restaurantes</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-blue-900"></div>
          <div>
            <span className="block font-black text-cyan-300 text-base">PRODUCTOS ORIGINALES 100%</span>
            <span className="text-slate-400">Garantía de Metraje Real</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-blue-900"></div>
          <div>
            <span className="block font-black text-amber-300 text-base">PEDIDOS AL {COMPANY_INFO.phoneFormatted}</span>
            <span className="text-slate-400">WhatsApp Directo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
