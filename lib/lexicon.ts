export interface TermDefinition {
  term: string
  definition: string
}

export const LEXICON: Record<string, string> = {
  MVP: "Producto Mínimo Viable - Versión básica del producto con funcionalidades esenciales para validar la idea con usuarios reales",
  "CI/CD": "Integración y Despliegue Continuo - Proceso automático que integra código nuevo y lo despliega a producción sin intervención manual",
  "Next.js": "Framework de React para aplicaciones web optimizadas con renderizado del lado del servidor",
  React: "Biblioteca de JavaScript para construir interfaces de usuario interactivas y reactivas",
  TypeScript: "Superset de JavaScript que añade tipado estático para detectar errores en tiempo de desarrollo",
  "Node.js": "Entorno de ejecución para ejecutar JavaScript del lado del servidor",
  PostgreSQL: "Sistema de base de datos relacional de código abierto, potente y escalable",
  ORM: "Object-Relational Mapping - Técnica que convierte datos entre sistemas tipados y bases de datos relacionales",
  "Full-Stack": "Desarrollo completo que incluye frontend (interfaz) y backend (lógica y base de datos)",
  API: "Application Programming Interface - Conjunto de reglas que permite a aplicaciones comunicarse entre sí",
  REST: "Representational State Transfer - Estilo arquitectónico para diseñar APIs web",
  GraphQL: "Lenguaje de consulta para APIs que permite al cliente solicitar exactamente los datos necesarios",
  OWASP: "Proyecto de seguridad en aplicaciones web con lista de verificación de seguridad",
  "AES-256": "Algoritmo de cifrado avanzado con clave de 256 bits, uno de los más seguros del mundo",
  TLS: "Transport Layer Security - Protocolo de comunicación seguro entre aplicaciones",
  SQL: "Structured Query Language - Lenguaje para gestionar bases de datos relacionales",
  XSS: "Cross-Site Scripting - Vulnerabilidad que permite inyectar código malicioso en sitios web",
  ERP: "Enterprise Resource Planning - Sistema integrado para gestionar procesos empresariales",
  CRM: "Customer Relationship Management - Sistema para gestionar relaciones con clientes",
  SEO: "Search Engine Optimization - Conjunto de técnicas para mejorar la visibilidad en buscadores",
  Commit: "Confirmación - Acción de guardar cambios en el control de versiones de código",
  Frontend: "Parte del sistema que interactúa directamente con el usuario (interfaz visual)",
  Backend: "Parte del sistema que maneja la lógica, base de datos y procesos internos",
  "APIs": "Application Programming Interface - Interfaces que permiten conectar sistemas entre sí",
  CRMs: "Customer Relationship Management - Sistemas para gestionar relaciones con clientes",
  ERPs: "Enterprise Resource Planning - Sistemas integrados de gestión empresarial",
}