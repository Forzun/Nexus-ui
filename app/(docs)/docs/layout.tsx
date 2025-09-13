import { Sidebar } from "@/components/docs/sidebar";
import { docesConfig } from "@/lib/docs-config";

export default function ComponentsLayout({children} : {children: React.ReactNode}){

  return <div className="min-h-screen w-full flex"> 
      <Sidebar config={docesConfig.sidebarNav.components} />
      <main className="flex-1 p-8">
          {children}
      </main>
  </div>
}


