"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>DevLeads — Développement Web sur mesure</title>
        <meta name="description" content="Création de sites vitrine, e-commerce et applications web sur mesure pour entreprises et indépendants." />
        <meta name="keywords" content="développement web, site vitrine, e-commerce, application web, DevLeads" />
        <meta name="author" content="DevLeads" />
        <meta property="og:title" content="DevLeads — Développement Web sur mesure" />
        <meta property="og:description" content="Création de sites vitrine, e-commerce et applications web sur mesure pour entreprises et indépendants." />
        <meta property="og:image" content="/logo_devleads_blanc.png" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.devleads.org/" />
      </Head>
      {/* SECTION 1 - Hero/Présentation */}
      <section
        className="
          min-h-screen
          grid
          grid-cols-1
          grid-rows-none
          md:grid-cols-4
          md:grid-rows-5
          gap-4
          px-2 md:px-4
          py-10 md:py-0
          w-full
          max-w-7xl
          mx-auto
        "
      >
        {/* Bloc 1 - Texte principal */}
        <motion.div
          className="
    flex flex-col items-center justify-end text-center
    order-1
    md:order-none
    md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-4
    p-4
    bg-[#EFEEEE]                      // couleur du bouton normal
    rounded-2xl                       // arrondi
    shadow-[6px_6px_16px_#FFFFFF,-6px_-6px_12px_#D1CDC7,0_1px_0px_50%] // ombres neumorphisme
  "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="mb-5 mt-10 w-full flex justify-start">
            <Image
              src="/logo_devleads_transparent.png"
              alt="Logo DevLeads - Développement Web"
              width={300}
              height={80}
              style={{ width: "auto" }} 
              priority
            />
          </div>
          <h2
            className={`text-2xl md:text-4xl lg:text-[40px] mb-5 ${poppins.className} text-left max-w-xl`}
          >
            Votre partenaire digital pour des solutions web personnalisées
          </h2>
          <p
            className={`text-base md:text-lg ${poppins.className} text-left max-w-xl`}
          >
            Chez DevLeads, nous transformons vos idées en expériences numériques
            puissantes. Spécialisés dans le développement web sur mesure, nous
            créons des sites performants, esthétiques et optimisés pour les
            résultats. Que vous soyez une entreprise, un indépendant ou une
            startup, nous vous accompagnons à chaque étape de votre projet.
          </p>
        </motion.div>

        {/* Bloc 2 - Bouton */}
        <motion.div
          className="
    flex flex-col items-center justify-start
    order-2
    md:order-none
    md:col-start-1 md:col-end-3 md:row-start-4 md:row-end-6
    p-4
    bg-[#EFEEEE]                      // couleur du bouton normal
    rounded-2xl                       // arrondi
    shadow-[6px_6px_16px_#FFFFFF,-6px_-6px_12px_#D1CDC7,0_1px_0px_50%] // ombres neumorphisme
  "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Link href="/Contact" className="w-full max-w-xs">
            <button className="w-full bg-[#090C02] hover:bg-[#A62609] text-white text-lg md:text-2xl font-semibold py-3 px-4 rounded-lg shadow-lg transition duration-300 border-2 cursor-pointer">
              Consultation / Devis GRATUIT
            </button>
          </Link>
        </motion.div>

        {/* Bloc 3 - Image animée */}
        <div
          className="
    flex items-center justify-center
    order-4
    md:order-none
    md:col-start-3 md:col-end-5 md:row-start-3 md:row-end-6
    p-4
    bg-[#EFEEEE]                      // couleur du bouton normal
    rounded-2xl                       // arrondi
    shadow-[6px_6px_16px_#FFFFFF,-6px_-6px_12px_#D1CDC7,0_1px_0px_50%] // ombres neumorphisme
  "
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="w-full flex justify-center"
          >
          <Image
            src="/images/mac_tesla.png"
            alt="Mockup Mac Tesla"
            width={700}
            height={300}
            priority               
            className="rounded-lg transition duration-300 ease-in-out w-full max-w-md md:max-w-xl"
            style={{ height: "auto" }}   
          />
          </motion.div>
        </div>

        {/* Bloc 4 - Texte Développement */}
        <motion.div
          className="
    flex flex-col items-center justify-end gap-5 mt-10 md:mt-10
    order-3
    md:order-none
    md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-3
    p-4
    bg-[#EFEEEE]                      // couleur du bouton normal
    rounded-2xl                       // arrondi
    shadow-[6px_6px_16px_#FFFFFF,-6px_-6px_12px_#D1CDC7,0_1px_0px_50%] // ombres neumorphisme
  "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {/* Image du haut */}
          <Image
            src="/images/logo_site_vitrine.png"
            alt="DevLeads - Développement Site vitrine"
            width={160}
            height={120}
            className="w-32 md:w-[250px]" // w-32 = 128px, md:w-[150px] = 150px
          />

          {/* Images du bas */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <Image
              src="/images/logo_site_commerce.png"
              alt="DevLeads - Développement Site e-commerce"
              width={160}
              height={120}
              className="w-32 md:w-[250px]"
            />
            <Image
              src="/images/logo_site_perso.png"
              alt="DevLeads - Développement Site personnalisé"
              width={160}
              height={120}
              className="w-32 md:w-[250px]"
            />
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 - Présentation offres */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-3 grid-rows-none md:grid-rows-5 gap-5 w-full max-w-7xl mx-auto px-2 md:px-4 py-10 md:py-0">
        {/* div1 : Image + texte */}
        <motion.div
          className="col-start-1 md:col-end-4 row-start-1 row-end-2 flex justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2
            className={`w-full md:w-[1000px] text-center text-2xl md:text-5xl lg:text-7xl font-bold text-black z-10 mt-10 md:mt-20 pb-6 md:pb-10 border-b-2 border-white ${poppins.className}`}
          >
            Conception WEB
          </h2>
        </motion.div>

        {/* div2 - Site Vitrine */}
        <motion.div
          className="
            bg-[#f8f9fa] text-black rounded-br-[1rem] rounded-tl-[1rem] rounded-bl-[3rem] rounded-tr-[3rem] flex flex-col justify-between text-center
            p-4 md:p-6 shadow-lg m-4 md:m-10 border-2
            col-start-1 col-end-2 row-start-2 row-end-6
          "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="flex flex-col items-center">
            <Image
              src="/images/img_vitrine.png"
              alt="DevLeads - Développement Site Vitrine"
              width={70}
              height={70}
              className="mb-4 w-16 md:w-[70px]"
            />
            <h3 className="text-2xl md:text-4xl font-bold text-black mb-4 md:mb-10">
              Conception de sites web
            </h3>
            <p className="text-base md:text-2xl lg:text-3xl text-black">
              Nous sommes une société de conception de sites web et une agence
              de développement de sites web. Solution complète pour améliorer
              votre présence en ligne. Démarquez de la concurrence !
            </p>
          </div>
          <div className="w-full mt-auto pt-4 md:pt-6 pb-2 md:pb-5 space-y-1 md:space-y-2 overflow-hidden">
            <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] text-xs md:text-sm text-blue-700 font-semibold">
              <span className="inline-block mx-2 md:mx-4">Site Vitrine</span>
              <span className="inline-block mx-2 md:mx-4">Landing Page</span>
              <span className="inline-block mx-2 md:mx-4">Portfolio</span>
              <span className="inline-block mx-2 md:mx-4">One Page</span>
              <span className="inline-block mx-2 md:mx-4">Événementiel</span>
              <span className="inline-block mx-2 md:mx-4">Responsive</span>
            </div>
            <div className="whitespace-nowrap animate-[marquee-reverse_24s_linear_infinite] text-xs md:text-sm text-blue-700 font-semibold">
              <span className="inline-block mx-2 md:mx-4">HTML</span>
              <span className="inline-block mx-2 md:mx-4">Next.js</span>
              <span className="inline-block mx-2 md:mx-4">UI/UX</span>
              <span className="inline-block mx-2 md:mx-4">Design</span>
              <span className="inline-block mx-2 md:mx-4">Animations</span>
              <span className="inline-block mx-2 md:mx-4">Accessibilité</span>
            </div>
            <div className="whitespace-nowrap animate-[marquee_28s_linear_infinite] text-xs md:text-sm text-blue-700 font-semibold">
              <span className="inline-block mx-2 md:mx-4">Rapide</span>
              <span className="inline-block mx-2 md:mx-4">Optimisé SEO</span>
              <span className="inline-block mx-2 md:mx-4">Google Fonts</span>
              <span className="inline-block mx-2 md:mx-4">Formulaires</span>
              <span className="inline-block mx-2 md:mx-4">Mobile First</span>
              <span className="inline-block mx-2 md:mx-4">TailwindCSS</span>
            </div>
          </div>
        </motion.div>

        {/* div3 - E-commerce */}
        <motion.div
          className="
            bg-[#f8f9fa] text-black rounded-br-[1rem] rounded-tl-[1rem] rounded-bl-[3rem] rounded-tr-[3rem] flex flex-col justify-between text-center
            p-4 md:p-6 shadow-lg m-4 md:m-10 border-2
            col-start-1 md:col-start-2 md:col-end-3 row-start-6 md:row-start-2 md:row-end-6
          "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="flex flex-col items-center">
            <Image
              src="/images/img_commerce.png"
              alt="DevLeads - Développement Site E-commerce"
              width={70}
              height={70}
              className="mb-4 w-16 md:w-[70px]"
            />
            <h3 className="text-2xl md:text-4xl font-bold text-black mb-4 md:mb-6">
              Boutiques en ligne modernes
            </h3>
            <p className="text-base md:text-2xl lg:text-3xl text-black">
              Des boutiques en ligne à la pointe de la technologie. Augmentez
              vos ventes avec des solutions web professionnelles. Nous concevons
              des plateformes e-commerce performantes, sécurisées et évolutives.
            </p>
          </div>
          <div className="w-full mt-auto pt-4 md:pt-6 pb-2 md:pb-5 space-y-1 md:space-y-2 overflow-hidden">
            <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] text-xs md:text-sm text-purple-700 font-semibold">
              <span className="inline-block mx-2 md:mx-4">E-commerce</span>
              <span className="inline-block mx-2 md:mx-4">Stripe</span>
              <span className="inline-block mx-2 md:mx-4">
                Paiement sécurisé
              </span>
              <span className="inline-block mx-2 md:mx-4">Catalogue</span>
              <span className="inline-block mx-2 md:mx-4">Vente en ligne</span>
            </div>
            <div className="whitespace-nowrap animate-[marquee-reverse_24s_linear_infinite] text-xs md:text-sm text-purple-700 font-semibold">
              <span className="inline-block mx-2 md:mx-4">Produits</span>
              <span className="inline-block mx-2 md:mx-4">Commandes</span>
              <span className="inline-block mx-2 md:mx-4">Livraison</span>
              <span className="inline-block mx-2 md:mx-4">Dashboard</span>
              <span className="inline-block mx-2 md:mx-4">Next.js</span>
            </div>
            <div className="whitespace-nowrap animate-[marquee_28s_linear_infinite] text-xs md:text-sm text-purple-700 font-semibold">
              <span className="inline-block mx-2 md:mx-4">WooCommerce</span>
              <span className="inline-block mx-2 md:mx-4">Shopify</span>
              <span className="inline-block mx-2 md:mx-4">CMS</span>
              <span className="inline-block mx-2 md:mx-4">Panier</span>
              <span className="inline-block mx-2 md:mx-4">SEO</span>
            </div>
          </div>
        </motion.div>

        {/* div4 - Perso */}
        <motion.div
          className="
            bg-[#f8f9fa] text-black rounded-br-[1rem] rounded-tl-[1rem] rounded-bl-[3rem] rounded-tr-[3rem] flex flex-col justify-between text-center
            p-4 md:p-6 shadow-lg m-4 md:m-10 border-2
            col-start-1 md:col-start-3 md:col-end-4 row-start-7 md:row-start-2 md:row-end-6
          "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="flex flex-col items-center">
            <Image
              src="/images/img_perso.png"
              alt="DevLeads - Développement Site personnalisé"
              width={70}
              height={70}
              className="mb-4 w-16 md:w-[70px]"
            />
            <h3 className="text-2xl md:text-4xl font-bold text-black mb-4 md:mb-10">
              L'envie de votre choix ?
            </h3>
            <p className="text-base md:text-2xl lg:text-3xl">
              Vous avez un projet unique en tête ? Que ce soit un outil métier,
              un espace client sur-mesure ou un concept original, nous le
              réalisons pour vous. Donnez vie à vos idées avec une solution web
              personnalisée !
            </p>
          </div>
          <div className="w-full mt-auto pt-4 md:pt-6 pb-2 md:pb-5 space-y-1 md:space-y-2 overflow-hidden">
            <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] text-xs md:text-sm text-pink-700 font-semibold">
              <span className="inline-block mx-2 md:mx-4">Sur-mesure</span>
              <span className="inline-block mx-2 md:mx-4">Dashboard</span>
              <span className="inline-block mx-2 md:mx-4">Admin Panel</span>
              <span className="inline-block mx-2 md:mx-4">API REST</span>
              <span className="inline-block mx-2 md:mx-4">Automatisation</span>
            </div>
            <div className="whitespace-nowrap animate-[marquee-reverse_24s_linear_infinite] text-xs md:text-sm text-pink-700 font-semibold">
              <span className="inline-block mx-2 md:mx-4">SaaS</span>
              <span className="inline-block mx-2 md:mx-4">Client Privé</span>
              <span className="inline-block mx-2 md:mx-4">Intranet</span>
              <span className="inline-block mx-2 md:mx-4">
                Portail sécurisé
              </span>
              <span className="inline-block mx-2 md:mx-4">Composants UI</span>
            </div>
            <div className="whitespace-nowrap animate-[marquee_28s_linear_infinite] text-xs md:text-sm text-pink-700 font-semibold">
              <span className="inline-block mx-2 md:mx-4">Full Stack</span>
              <span className="inline-block mx-2 md:mx-4">React</span>
              <span className="inline-block mx-2 md:mx-4">Next.js</span>
              <span className="inline-block mx-2 md:mx-4">Prisma</span>
              <span className="inline-block mx-2 md:mx-4">Supabase</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 - Technologies */}
      <section className="min-h-screen flex flex-col items-center justify-center px-2 md:px-4 py-16 md:py-28 w-full">
        <motion.div
          className="text-center w-full max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="text-black text-2xl md:text-4xl font-bold">
            Technologies avec lesquelles nous travaillons
          </h1>
          <div className="w-16 md:w-32 h-[2px] bg-[#A62609] my-4 mx-auto"></div>
          <h2 className="text-black text-base md:text-2xl mb-10">
            Technologies de programmation pour la conception et le développement
            web
          </h2>

          {/* Image avec effet hover */}
          <motion.img
            src="/images/tech_web.png"
            alt="Compétences DevLeads"
            className="w-full max-w-[400px] md:max-w-[800px] mx-auto border-2 border-[#A62609] rounded-xl shadow-xl"
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 0px 40px rgba(255, 255, 255, 0.3)",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </motion.div>
      </section>
    </div>
  );
}
