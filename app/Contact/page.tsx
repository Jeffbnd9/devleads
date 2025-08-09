"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

type Tab = "message" | "devis";

export default function ContactPage() {
  const [tab, setTab] = useState<Tab>("message");
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const slide: Variants = {
    initial: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 60 : -60,
      filter: "blur(3px)",
      scale: 0.98,
    }),
    animate: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -60 : 60,
      filter: "blur(3px)",
      scale: 0.98,
      transition: { duration: 0.3, ease: "easeIn" },
    }),
  };

  const direction = tab === "devis" ? 1 : -1;

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
    type: "message" | "devis"
  ) {
    e.preventDefault();
  
    // Keep a stable reference to the form BEFORE any awaits
    const form = e.currentTarget;
  
    setLoading(true);
    setStatus(null);
    setErrorMsg(null);
  
    const formDataObj = Object.fromEntries(new FormData(form).entries());
    (formDataObj as any).type = type;
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataObj),
      });
  
      const json = await res.json().catch(() => ({} as any));
      console.log("[contact] status:", res.status, "json:", json);
  
      if (res.ok && (json.ok === undefined || json.ok === true)) {
        setStatus("success");
        form.reset(); // ✅ safe now
      } else {
        setStatus("error");
        setErrorMsg(json?.error || `HTTP ${res.status}`);
      }
    } catch (err: any) {
      console.error("[contact] fetch error:", err);
      setStatus("error");
      setErrorMsg(err?.message || "Erreur réseau");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full flex items-start justify-center mt-25 py-10 md:py-16">
      <div className="absolute inset-x-0 top-24 mx-auto h-[260px] max-w-5xl -z-10 overflow-hidden rounded-3xl" />

      <div className="w-[92%] max-w-5xl rounded-3xl border border-[#26292f] bg-[#2f3136] shadow-[6px_6px_20px_#1e2025,-6px_-6px_16px_#3a3d45] relative overflow-hidden">
        <div className="grid grid-cols-2">
          <button
            onClick={() => setTab("message")}
            className={`py-4 text-lg md:text-xl font-semibold tracking-wide border-b border-[#3c3f46] ${
              tab === "message" ? "text-white" : "text-gray-300"
            }`}
          >
            Message
          </button>
          <button
            onClick={() => setTab("devis")}
            className={`py-4 text-lg md:text-xl font-semibold tracking-wide border-b border-[#3c3f46] ${
              tab === "devis" ? "text-white" : "text-gray-300"
            }`}
          >
            Devis
          </button>
        </div>

        <div className="relative min-h-[560px] md:min-h-[520px]">
          <AnimatePresence custom={direction} mode="wait">
            {tab === "message" ? (
              <motion.section
                key="message"
                custom={direction}
                variants={slide}
                initial="initial"
                animate="animate"
                exit="exit"
                className="grid md:grid-cols-[1fr_1px_420px] gap-0 p-6 md:p-8"
              >
                {/* Formulaire message */}
                <div className="pr-0 md:pr-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center md:text-left">
                    Message
                  </h3>

                  <form
                    className="space-y-5 max-w-2xl"
                    onSubmit={(e) => handleSubmit(e, "message")}
                  >
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="Votre nom"
                      className="w-full rounded-xl px-4 py-3 bg-[#2a2c31] text-white border border-[#454953] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#7be8ff66]"
                    />
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="Votre email"
                      className="w-full rounded-xl px-4 py-3 bg-[#2a2c31] text-white border border-[#454953] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#7be8ff66]"
                    />
                    <textarea
                      name="message"
                      required
                      rows={6}
                      placeholder="Votre message"
                      className="w-full rounded-xl px-4 py-3 bg-[#2a2c31] text-white border border-[#454953] shadow-inner resize-none focus:outline-none focus:ring-2 focus:ring-[#7be8ff66]"
                    />

                    <div className="flex items-center justify-between pt-2 text-sm text-gray-300">
                      <a href="mailto:contact@devleads.org" className="underline">
                        contact@devleads.org
                      </a>
                      <span>+33 7 81 54 80 27</span>
                    </div>

                    {status === "success" && (
                      <p className="text-green-400">✅ Message envoyé</p>
                    )}
                    {status === "error" && (
                      <p className="text-red-400">
                        ❌ Erreur d'envoi{errorMsg ? ` — ${errorMsg}` : ""}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-4 px-5 py-2 rounded-xl bg-emerald-500 text-black font-semibold shadow hover:bg-emerald-400 transition"
                    >
                      {loading ? "Envoi..." : "Envoyer"}
                    </button>
                  </form>
                </div>

                {/* séparateur */}
                <div className="hidden md:block w-px bg-[#3c3f46]" />

                {/* Carte droite */}
                <div className="mt-8 md:mt-0 md:pl-8 flex flex-col items-center">
                  <div className="w-72 md:w-80 h-48 md:h-56 rounded-2xl overflow-hidden bg-[#2a2c31] border border-[#454953] shadow-inner">
                    <iframe
                      title="Localisation DevLeads"
                      src="https://www.google.com/maps?q=19+rue+Normande,+27370+Le+Thuit-de-l%E2%80%99Oison,+France&output=embed"
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-center text-gray-200 text-sm mt-3">
                    19 rue Normande,<br />27370 Le Thuit-de-l’Oison, France
                  </p>
                </div>
              </motion.section>
            ) : (
              <motion.section
                key="devis"
                custom={direction}
                variants={slide}
                initial="initial"
                animate="animate"
                exit="exit"
                className="grid md:grid-cols-[420px_1px_1fr] gap-0 p-6 md:p-8"
              >
                {/* bouton retour */}
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => setTab("message")}
                    className="mt-10 w-14 h-14 rounded-2xl bg-[#2a2c31] border border-[#454953] shadow-[4px_4px_12px_#23252c,-4px_-4px_10px_#3a3d45] text-white text-2xl hover:scale-105 transition relative"
                  >
                    ←
                  </button>
                </div>

                {/* séparateur */}
                <div className="hidden md:block w-px bg-[#3c3f46]" />

                {/* formulaire devis */}
                <div className="md:pl-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center md:text-left">
                    Devis
                  </h3>
                  <form
                    className="space-y-5 max-w-2xl"
                    onSubmit={(e) => handleSubmit(e, "devis")}
                  >
                    <input name="name" required type="text" placeholder="Votre nom" className="w-full rounded-xl px-4 py-3 bg-[#2a2c31] text-white border border-[#454953] shadow-inner" />
                    <input name="email" required type="email" placeholder="Votre email" className="w-full rounded-xl px-4 py-3 bg-[#2a2c31] text-white border border-[#454953] shadow-inner" />
                    <input name="phone" type="tel" placeholder="+33 …" className="w-full rounded-xl px-4 py-3 bg-[#2a2c31] text-white border border-[#454953] shadow-inner" />
                    <select name="siteType" className="w-full rounded-xl px-4 py-3 bg-[#2a2c31] text-white border border-[#454953] shadow-inner" defaultValue="Vitrine">
                      <option>Vitrine</option>
                      <option>E-commerce</option>
                      <option>Personnalisé</option>
                    </select>
                    <input name="project" placeholder="Quelques lignes…" className="w-full rounded-xl px-4 py-3 bg-[#2a2c31] text-white border border-[#454953] shadow-inner" />
                    
                    {status === "success" && (
                      <p className="text-green-400">✅ Message envoyé</p>
                    )}
                    {status === "error" && (
                      <p className="text-red-400">
                        ❌ Erreur d'envoi{errorMsg ? ` — ${errorMsg}` : ""}
                      </p>
                    )}

                    <button type="submit" disabled={loading} className="mt-4 px-5 py-2 rounded-xl bg-emerald-500 text-black font-semibold shadow hover:bg-emerald-400 transition">
                      {loading ? "Envoi..." : "Envoyer"}
                    </button>
                  </form>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}