import { Sidebar } from "@/components/docs/sidebar";
import { docesConfig } from "@/lib/docs-config";

export default function ComponentsLayout({children} : {children: React.ReactNode}){

  return <div className="overflow-hidden"> 
      <Sidebar config={docesConfig.navMain}>
        {children}
      </Sidebar>
  </div>
}


