export const COMPANY_INFO = {
  NAME: "Tresbit",
  PHONE: process.env.NEXT_PUBLIC_COMPANY_PHONE || "+54 9 261 605 0326",
  EMAIL: process.env.NEXT_PUBLIC_EMAIL_TO || "contact@tresbit.com",
  ADDRESS:
    process.env.NEXT_PUBLIC_COMPANY_ADDRESS ||
    "Ceretti 244, Godoy Cruz, Mendoza 5501, AR",
  TAGLINE:
    process.env.NEXT_PUBLIC_COMPANY_TAGLINE ||
    "Tecnología que funciona. Negocios que avanzan.",
  WEBSITE: process.env.NEXT_PUBLIC_COMPANY_WEBSITE || "https://tresbit.com",
};

export const SOCIAL_LINKS = {
  LINKEDIN:
    process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN ||
    "https://linkedin.com/company/tresbit",
  GITHUB:
    process.env.NEXT_PUBLIC_SOCIAL_GITHUB || "https://github.com/tresbitsoft",
  INSTAGRAM:
    process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ||
    "https://www.instagram.com/tresbitsoft/",
};

export const SECTION_IDS = {
  WELCOME: "welcome",
  FEATURES: "features",
  SECURITY: "security",
  PARTNERS: "partners",
  CONTACT: "contacto",
};

/**
 * Controla la opacidad global de todas las animaciones de fondo del sitio.
 * Rango: 0 (invisible) a 1 (máxima intensidad).
 */
export const ANIMATION_CONFIG = {
  OPACITY: 0.5,
};

export const EMAIL_CONFIG = {
  HOST: process.env.EMAIL_HOST || "smtp.gmail.com",
  PORT: Number(process.env.EMAIL_PORT) || 587,
  USER: process.env.EMAIL_USER || "",
  PASS: process.env.EMAIL_PASS || "",
  TO: process.env.EMAIL_TO || "contacto@tresbit.com",
};
