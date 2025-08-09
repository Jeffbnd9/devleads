"use client";

import Link from "next/link";
import { Facebook, Instagram, LinkedIn, Mail } from "@mui/icons-material";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#090C02] text-white py-10 px-4 mt-20 border-t border-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Bloc 1 - Logo & présentation */}
        <div className="flex flex-col items-center md:items-start space-y-4">
        <Image
        src="/images/logo_devleads.png"
        alt="Logo DevLeads - Développement Web"
        width={120}
        height={40}
        style={{ width: "auto" }}
        priority
      />
          <p className="text-sm text-white max-w-xs">
            DevLeads conçoit des sites web sur-mesure pour particuliers et professionnels. Créativité, performance et accompagnement.
          </p>
        </div>

        {/* Bloc 2 - Navigation */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h4 className="text-lg font-medium text-[#E10600] mb-2">Navigation</h4>
          <Link href="/" className="text-white hover:text-red-500 transition">
            Accueil
          </Link>
          <Link href="/Projets" className="text-white hover:text-red-500 transition">
            Projets
          </Link>
          <Link href="/Contact" className="text-white hover:text-red-500 transition">
            Contact
          </Link>
        </div>

        {/* Bloc 3 - Réseaux sociaux */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h4 className="text-lg font-medium text-[#E10600] mb-2">Suivez-nous</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-blue-500 transition" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#" className="hover:text-pink-500 transition" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#" className="hover:text-blue-400 transition" aria-label="LinkedIn">
              <LinkedIn />
            </a>
            <a
              href="mailto:contact@devleads.fr"
              className="hover:text-gray-400 transition"
              aria-label="Mail"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>

      {/* Informations légales */}
      <div className="border-t border-white mt-10 pt-6 text-sm text-white text-center space-y-2">
        <p>
          DevLeads - Micro-entreprise de Jeff Benard - SIRET : [en cours d'enregistrement] - Le Thuit-de-l'Oison, France
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-xs text-white">
          <Link href="/mentions" className="hover:text-red-500 transition">
            Mentions légales
          </Link>
          <Link href="/conf" className="hover:text-red-500 transition">
            Politique de confidentialité
          </Link>
          <Link href="/cgu" className="hover:text-red-500 transition">
            Conditions générales d'utilisation (CGU)
          </Link>
        </div>
        <p>© {new Date().getFullYear()} DevLeads. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
