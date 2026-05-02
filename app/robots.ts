import type { MetadataRoute } from "next"
import { COMPANY_INFO } from "@/lib/config"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${COMPANY_INFO.WEBSITE}/sitemap.xml`,
  }
}
