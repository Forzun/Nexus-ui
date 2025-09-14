import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

interface SidebarItems {
  title: string;
  url: string;
  items: {
    title: string;
    url: string;
    badge?: string;

    isActive?: boolean | undefined;
  }[];
}

interface SidebarProps {
  config: SidebarItems[];
}

export function Sidebar({ config , children }: { config: SidebarItems[] , children: React.ReactNode}) {
  return (
    <div>
      <SidebarProvider className="">
        <AppSidebar sidebarData={config} />
        <SidebarInset className="">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
          </header>
          <main className="flex-1 overflow-auto p-2 ">
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
