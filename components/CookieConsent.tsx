"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "devleads.consent.analytics"; // "granted" | "denied"

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  const applyConsent = (value: "granted" | "denied") => {
    (window as any).gtag?.("consent", "update", {
      analytics_storage: value,
      // ad_storage: value,
      // ad_user_data: value,
      // ad_personalization: value,
    });
  };

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as "granted" | "denied" | null;
      if (stored === "granted" || stored === "denied") {
        applyConsent(stored);
        setVisible(false);
      } else {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  if (!mounted || !visible) return null;

  return (
    <div
      className="
        fixed inset-x-0 bottom-0 z-[9999]
        mx-auto w-full md:max-w-3xl md:rounded-2xl
        bg-[#2f3136] text-white border border-[#3c3f46]
        shadow-[6px_6px_20px_#1e2025,-6px_-6px_16px_#3a3d45]
        p-4 md:p-5
      "
      role="dialog"
      aria-live="polite"
      aria-label="Bandeau de consentement aux cookies"
    >
      <div className="md:flex md:items-center md:justify-between gap-4">
        <p className="text-sm md:text-base leading-6">
          Nous utilisons uniquement des cookies de mesure d’audience (Google Analytics). 
          Vous pouvez accepter ou refuser. Vous pourrez changer d’avis à tout moment 
          depuis “Gérer mes cookies”.
        </p>
        <div className="flex items-center gap-3 mt-3 md:mt-0">
          <button
            className="px-3 py-2 rounded-xl bg-[#2a2c31] border border-[#454953]
                       shadow-[4px_4px_12px_#23252c,-4px_-4px_10px_#3a3d45]
                       hover:scale-[1.03] transition"
            onClick={() => {
              try { localStorage.setItem(STORAGE_KEY, "denied"); } catch {}
              applyConsent("denied");
              setVisible(false);
            }}
          >
            Refuser
          </button>
          <button
            className="px-3 py-2 rounded-xl bg-emerald-500 text-black font-semibold
                       shadow hover:bg-emerald-400 transition"
            onClick={() => {
              try { localStorage.setItem(STORAGE_KEY, "granted"); } catch {}
              applyConsent("granted");
              setVisible(false);
            }}
          >
            Accepter
          </button>
        </div>
      </div>
      <p className="text-xs text-gray-300 mt-2">
        En savoir plus : <a href="/conf" className="underline">Politique de confidentialité</a>
      </p>
    </div>
  );
}