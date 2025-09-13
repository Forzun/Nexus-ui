
export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold">Your UI Library</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Beautiful, accessible, and customizable components built with Next.js
          and Tailwind CSS
        </p>
        <div className="flex gap-4 justify-center"></div>
      </div>

      {/* Component previews */}
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Show off your components here */}
      </div>
    </main>
  );
}
