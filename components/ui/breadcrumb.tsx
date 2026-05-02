import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 pt-6 pb-0">
      <ol className="flex items-center gap-1.5 text-xs text-slate-500" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-1.5"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {i > 0 && <ChevronRight className="w-3 h-3 shrink-0 text-slate-600" aria-hidden="true" />}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-slate-300 transition-colors duration-150"
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span className="text-slate-400" itemProp="name" aria-current="page">{item.label}</span>
            )}
            <meta itemProp="position" content={String(i + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  )
}
