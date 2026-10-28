import React, { useState } from "react";
import { Send, CheckCircle2, Mail, Phone, User, MessageSquare, Building } from "lucide-react";
import Button from "../common/Button";
import { COMPANY_INFO } from "../../data/productsData";
import { getWhatsAppLink } from "../../utils/helpers";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = `*CONSULTA GENERAL - PiXis DISTRIBUIDORA*\n\n👤 *Nombre:* ${name}\n📞 *Teléfono:* ${phone}\n✉️ *Email:* ${email}\n📌 *Asunto:* ${subject}\n\n💬 *Mensaje:* ${message}`;

    window.open(getWhatsAppLink(msg), "_blank");
    setSubmitted(true);
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-lg font-sans">
      <h3 className="text-2xl font-black text-slate-900 mb-2">
        Mensaje Directo a Ventas
      </h3>
      <p className="text-xs text-slate-500 mb-6 font-medium">
        Déjanos tus datos o haz tu consulta comercial. Responderemos de inmediato por correo o WhatsApp ({COMPANY_INFO.phoneFormatted}).
      </p>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4 animate-in fade-in">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h4 className="text-xl font-black text-emerald-950">¡Mensaje Recibido!</h4>
          <p className="text-xs text-emerald-800 max-w-md mx-auto font-medium">
            Gracias por contactar a <strong>PiXis DISTRIBUIDORA</strong>. Un asesor comercial se comunicará contigo a la brevedad.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setName("");
              setEmail("");
              setPhone("");
              setSubject("");
              setMessage("");
            }}
            className="text-xs font-black text-emerald-700 hover:underline cursor-pointer"
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Nombre Completo:</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Juan Pérez"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-3 py-2.5 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Teléfono o Celular:</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ej. 962 674 574"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-3 py-2.5 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Correo Electrónico:</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@correo.com"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-3 py-2.5 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Asunto de la Consulta:</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Ej. Cotización Papel Sabanilla Ariess"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Detalle del Mensaje:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe brevemente las cantidades o productos que requieres..."
              rows={4}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
              required
            />
          </div>

          <Button
            type="submit"
            variant="emerald"
            size="lg"
            fullWidth
            icon={<Send className="w-4 h-4" />}
          >
            Enviar Consulta por WhatsApp
          </Button>

          <p className="text-[11px] text-center text-slate-500 pt-1 font-medium">
            Atención personalizada de Lunes a Sábado.
          </p>
        </form>
      )}
    </div>
  );
}
