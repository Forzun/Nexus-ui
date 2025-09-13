import Link from "next/link"
import { cn } from "@/lib/utils"

interface SidebarItem {
  title: string
  href: string
  badge?: string
}

interface SidebarProps {
  config: SidebarItem[]
}

export function Sidebar({ config }: SidebarProps) {
  return (
    <div className="w-64 border-r bg-background p-6">
      <div className="space-y-4">
        <div>
          <h3 className="mb-2 text-sm font-semibold">Getting Started</h3>
          <nav className="space-y-1">
            {config.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <span>{item.title}</span>
                {item.badge && (
                  <span className="rounded-md bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}