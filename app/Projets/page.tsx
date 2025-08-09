"use client";

import { motion } from "framer-motion";



export default function ProjetsComingSoon() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Orbe décorative en arrière-plan */}
      <div className="pointer-events-none absolute -z-10 top-1/3 left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] aspect-square rounded-full blur-3xl opacity-30"
           style={{
             background:
               "radial-gradient(closest-side, rgba(140,243,255,0.35), rgba(0,0,0,0) 65%)",
           }}
      />

      {/* Carte principale */}
      <motion.div
        initial={{ opacity: 0, y: 14, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="
          w-[92%] max-w-3xl
          rounded-3xl
          bg-[#31343a]
          border border-[#23252c]
          shadow-[4px_4px_16px_#23252c,-4px_-4px_12px_#484c56,0_1px_0px_#16171b]
          relative overflow-hidden
          px-6 py-10 md:px-12 md:py-14
          text-center
        "
      >
        {/* Liseré/Glow subtil en haut */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a2c31] border border-[#3f434c] shadow-inner text-xs tracking-wider text-gray-200 mb-5">
          <span className="inline-block w-2 h-2 rounded-full bg-[#7be8ff] shadow-[0_0_8px_#7be8ff]"></span>
          PROJETS
        </div>

        {/* Titre */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wide">
          Coming&nbsp;soon
        </h1>

        {/* Sous-titre */}
        <p className="mt-4 text-sm md:text-base text-gray-300">
          Notre galerie de réalisations arrive très bientôt.
        </p>

        {/* Animation points */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#b8eaff] opacity-70 animate-bounce"></span>
          <span className="w-2 h-2 rounded-full bg-[#b8eaff] opacity-70 animate-bounce [animation-delay:120ms]"></span>
          <span className="w-2 h-2 rounded-full bg-[#b8eaff] opacity-70 animate-bounce [animation-delay:240ms]"></span>
        </div>

        {/* CTA optionnel */}
        <div className="mt-10">
          <a
            href="/Contact"
            className="
              inline-flex items-center justify-center
              px-5 py-2.5 rounded-xl
              bg-[#31343a]
              text-white font-semibold tracking-wide
              border border-[#23252c]
              shadow-[0_0_18px_#7be8ff66,4px_4px_14px_#23252c,-4px_-4px_10px_#484c56]
              transition-transform duration-150
              hover:scale-[1.03]
            "
            title="Nous contacter"
          >
            Nous contacter
          </a>
        </div>

        {/* Glow sous la carte */}
        <span className="pointer-events-none absolute left-1/2 -bottom-3 -translate-x-1/2 w-24 h-3 rounded-full bg-[#b8eaff] blur-[6px] opacity-70" />
      </motion.div>
    </div>
  );
}
