import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

const SMTP_HOST = requireEnv("SMTP_HOST");
const SMTP_PORT = Number(requireEnv("SMTP_PORT"));
const SMTP_USER = requireEnv("SMTP_USER");
const SMTP_PASS = requireEnv("SMTP_PASS");
const SMTP_TO = requireEnv("SMTP_TO");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, type, phone, siteType, project } = body;

    // Création du transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Contenu de l'email
    const subject =
      type === "devis"
        ? "Demande de devis depuis DevLeads"
        : "Nouveau message depuis DevLeads";

    const text =
      type === "devis"
        ? `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone || "Non fourni"}\nType de site: ${siteType}\nProjet: ${project}`
        : `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const html =
      type === "devis"
        ? `<p><strong>Nom:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Téléphone:</strong> ${phone || "Non fourni"}</p>
           <p><strong>Type de site:</strong> ${siteType}</p>
           <p><strong>Projet:</strong> ${project}</p>`
        : `<p><strong>Nom:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`;

    // Envoi
    await transporter.sendMail({
      from: `"DevLeads" <${SMTP_USER}>`,
      to: SMTP_TO,
      replyTo: email,
      subject,
      text,
      html,
    });

    // ✅ Réponse OK si tout s'est bien passé
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erreur d'envoi d'email:", error);
    return NextResponse.json({ ok: false, error: "Erreur lors de l'envoi du message" }, { status: 500 });
  }
}